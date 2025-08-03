import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

export default function FeaturesGrid() {
  const navigate = useNavigate();
  const features = [
    {
      title: "Top 150 Questions",
      img: "https://img.icons8.com/color/96/26a269/checklist--v1.png",
      path: "/top", 
    },
    {
      title: "Top 75 Questions",
      img: "https://img.icons8.com/color/96/26a269/prize.png",
      path: "top75",
    },
    {
      title: "Challenge a Friend",
      img: "https://img.icons8.com/color/96/26a269/handshake.png",
      path: "challenge",
    },
    {
      title: "Code Explanator",
      img: "https://img.icons8.com/color/96/26a269/source-code.png",
      path :"exp",
    },
  ];

  return (
    <SimpleGrid columns={2} spacing={7} p={7}>
  {features.map((feature) => (
    <MotionBox
      key={feature.title}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      bg="#FAF9EE"
      margin={5}
      border="3px solid #640D5F "
     
      p={8}
      borderRadius="xl"
      textAlign="center"
      cursor="pointer"
      _hover={{ boxShadow: "xl" }}
      onClick={() => feature.path && navigate(feature.path)}
    >
      <Image src={feature.img} alt={feature.title} mx="auto" boxSize="30px" />
      <Text mt={4} fontWeight="bold" fontSize="lg" color="#640D5F">
        {feature.title}
      </Text>
    </MotionBox>
  ))}
</SimpleGrid>

  );
}
