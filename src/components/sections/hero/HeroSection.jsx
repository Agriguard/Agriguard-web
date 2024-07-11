import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import CarouselSlide from "../../shared/CarouselSlide";

const imgSrc = ["/assets/carousel-1.jpg", "/assets/carousel-3.jpg", "/assets/carousel-2.jpg"];
const phoneFrameSrc = "/assets/Phoneframe.jpg";
const playStoreIconSrc = "/assets/playstore.png";

function HeroSection() {
  return (
    <>
      <Flex
        flexDir={{ base: "column-reverse", lg: "row" }}
        minH={{ lg: "100vh" }}
        mt={{ base: 16, lg: 0 }}
        justifyContent="center"
        alignItems="center"
      >
        {/* Text Content */}
        <Flex
          fontFamily="fonts.heading"
          alignSelf="center"
          w={{ lg: "75%" }}
          flexDir="column"
          gap={4}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", lg: "6xl" }}
            fontFamily="fonts.heading"
            color="secondary.900"
            textAlign={{ base: "center", lg: "start" }}
          >
            Data-Driven Farming, Smarter Yields, Traceable supply chain 
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "2xl" }}
            w={{ xl: "65%" }}
            fontWeight="300"
            textAlign={{ base: "center", lg: "start" }}
          >
            Equipping African Farmers with Precision agricultural technology and Data for
            Increased Crop Yields and Sustainable Agriculture
          </Text>
          <Flex gap={4} flexDir={{ base: "column", lg: "row" }} mx={{ base: "auto", lg: "initial" }}>
            <Link href="#contact">
              <Button
                color="white"
                bg="secondary.900"
                rounded="full"
                padding={{ lg: 8 }}
                size="lg"
                _hover={{ bg: "primary.900" }}
                leftIcon={<Image src={playStoreIconSrc} boxSize="24px" />}
              >
                Download
              </Button>
            </Link>
          </Flex>
        </Flex>

        {/* Phone Frame with Rounded Edges and Carousel */}
        <Box
          position="relative"
          w={{ base: "90%", sm: "80%", md: "70%", lg: "45%" }}
          aspectRatio={{ base: "9/16", lg: "9/19.8" }}
          overflow="hidden"
          shadow="2xl"
          my={{ base: "1rem", lg: 0 }}
          borderRadius="2xl"
        >
          <Image
            src={phoneFrameSrc}
            alt="Phone Frame"
            w="100%"
            h="auto"
            position="relative"
            opacity="0.8"
            borderRadius="2xl"
          />

          {/* Carousel Content Container */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            overflow="hidden"
            borderRadius="2xl"
          >
            <CarouselSlide imgSrcArray={imgSrc} objectFit="contain" />
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default HeroSection;
