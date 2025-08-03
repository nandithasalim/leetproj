import React, { useEffect, useState } from 'react';
import { Box, Grid, Text, VStack } from '@chakra-ui/react';

function MonthlyProgress() {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("progress")) || {};
    setProgress(saved);
  }, []);

  return (
    <VStack
      align="start"
      p={4}
      spacing={4}
                
    >
 
      <Text fontSize="2xl" fontWeight="bold" color="#FFFFFF"  pl={4}>Monthly Progress</Text>

      <Grid templateColumns="repeat(7, 1fr)" gap={3} pl={4}>
        {[...Array(30)].map((_, i) => {
          const date = new Date(); 
          date.setDate(i + 1);
          const dateKey = date.toISOString().split("T")[0];
          const completed = progress[dateKey];

          return (
            <Box
              key={i}
              w="22px"
              h="22px"
              borderRadius="50%"
            
              bg={completed ? "green.400" : "gray.300"}
              transition="all 0.3s"
              _hover={{ transform: 'scale(1.2)', bg: completed ? "green.500" : "gray.400" }}
            />
          );
        })}
      </Grid>
    </VStack>
  );
}

export default MonthlyProgress;
