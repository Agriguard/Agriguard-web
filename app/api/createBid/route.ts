import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const token = cookies().get('access_token')?.value;
  console.log(`Access Token: ${token}`);
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { farmId, preferredAmount, userId } = await request.json();
  console.log(`Received farmId: ${farmId}, preferredAmount: ${preferredAmount}, userId: ${userId}`);

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const url = `http://178.128.240.96/market/bids/${userId}/create/`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        aggregated_season: farmId,
        bid_amount: preferredAmount,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`Error creating bid: ${errorData.error}`);
      return NextResponse.json({ error: errorData.error }, { status: response.status });
    }

    const data = await response.json();
    console.log('Server response data:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error creating bid:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
