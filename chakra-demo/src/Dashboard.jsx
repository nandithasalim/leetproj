import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Button, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import MonthlyProgress from "./Monthly";
import FeaturesGrid from "./Features";

const MotionBox = motion(Box);

export default function Home() {
  const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Dream big and dare to fail.",
    "Code. Debug. Repeat. Success will follow.",
    "Consistency beats motivation every single day."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <VStack w="100%" minH="100vh" align="stretch" bg="#6C63FF" >
      {/* ✅ Navbar */}
      <Flex w="100%" p={4}  justify="space-between"  bg={"#FAF9EE"} borderRadius="xl" >
        <Heading size="md" color="#640D5F" >Home</Heading>
        <Button color="#640D5F" variant="outline" border="2px solid #640D5F" borderRadius="xl" _hover={{bg:"#640D5F", color:"white"}}>Login</Button>
      </Flex>

      {/* ✅ Quote Box */}
      <Box  p={12} w="100%" textAlign="center" >
        <AnimatePresence mode="wait">
          <MotionBox
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading 

  color="#FFFFFF"
 fontFamily='"DotGothic16", sans-serif'
  fontWeight="600"
  fontSize={["4xl"]} // Responsive font size
>
{quotes[index]}
</Heading>

          </MotionBox>
        </AnimatePresence>
      </Box>

      

      {/* ✅ Sidebar + Monthly Progress */}
      <Flex w="100%"  justify="space-between">
      
      {/* ✅ Sidebar on the left */}
    
        <Sidebar />
      
      {/* ✅ FeaturesGrid in the center */}
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Box w="500px">
          <FeaturesGrid />
        </Box>
      </Box>

      {/* ✅ Monthly progress on the right */}
      <Box w="300px"  mr={10} h="30px" >
        <MonthlyProgress />
      </Box>
    </Flex>
  );
    </VStack>
  );
}
