/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Text } from "@chakra-ui/react";
import SectionHeader from "../../shared/SectionHeader";

const steps = [
  {
    number: "1",
    title: "Onboard Farmers",
    description: "Onboard farms and farmers for efficient management",
  },
  {
    number: "2",
    title: "Map Farm",
    description: "Visualize farm landscapes with precision mapping",
  },
  {
    number: "3",
    title: "Get Updates",
    description: "Receive real-time insights for informed decisions by text messages or voice",
  },
  {
    number: "4",
    title: "Track Yield",
    description: "Monitor and optimize crop productivity effortlessly",
  },
];

function SolutionSection() {
  return (
    <>
      <Box my={4}>
        <SectionHeader firstHeading="Our" secondHeading="Solution" />
        <Box w={{lg: "60%"}} mx="auto" mt={4}>
          <Text fontSize={{lg: "xl"}} fontFamily="fonts.body" textAlign="center">
            Our solution offers{" "}
            <Text as="span" fontWeight="700">
              AI-powered production risk scores to assess potential risks and plan accordingly
            </Text>
          </Text>
          <Text fontSize={{lg: "xl"}} fontFamily="fonts.body" textAlign="center" mt={4}>
            <Text as="span" fontWeight="700">
              Hyperlocal, precise, and timely insights tailored to each farm's unique needs
            </Text>
          </Text>
          <Text fontSize={{lg: "xl"}} fontFamily="fonts.body" textAlign="center" mt={4}>
            Empowering farmers/enterprises to make informed decisions and enhance their production cycles.
          </Text>
        </Box>
        <Flex gap={8} textAlign="center" mt={8} flexDir={{base: "column", lg: "row"}}>
          {steps.map((step, index) => {
            return (
              <Box
                key={index}
                fontFamily="fonts.body"
                shadow="2xl"
                p={8}
                rounded="2xl"
              >
                <Text fontSize="6xl" color="primary.900" fontWeight="700">
                  {step.number}
                </Text>
                <Text fontSize="xl" color="secondary.900" fontWeight="700">
                  {step.title}
                </Text>
                <Text>{step.description}</Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}

export default SolutionSection;
