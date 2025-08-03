import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  HStack,
  Checkbox,
  Progress,
  Text,
} from '@chakra-ui/react';

function Sidebar() {
  const [numProblems, setNumProblems] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleGenerate = () => {
    const list = Array.from({ length: numProblems }, (_, i) => ({
      id: i + 1,
      title: `Problem ${i + 1}`,
      completed: false,
    }));   
    setTodoList(list);
  };

  const handleTitleChange = (index, newTitle) => {
    const updatedList = [...todoList];
    updatedList[index].title = newTitle;
    setTodoList(updatedList);
  };

  const toggleComplete = (index) => {
    const updatedList = [...todoList];
    updatedList[index].completed = !updatedList[index].completed;
    setTodoList(updatedList);

    const anyCompleted = updatedList.some((item) => item.completed);
    if (anyCompleted) {
      const today = new Date().toISOString().split('T')[0];
      const progress = JSON.parse(localStorage.getItem('progress')) || {};
      progress[today] = true;
      localStorage.setItem('progress', JSON.stringify(progress));
    }
  };

  const completedCount = todoList.filter((item) => item.completed).length;
  const progressPercent = todoList.length
    ? (completedCount / todoList.length) * 100
    : 0;

  return (
    <Box
      bg=""
      
     
      w="300px"
      h="400px"
      display="flex"
      flexDirection="column" 
      p={4} ml={10} boxShadow="none !important" borderRadius="2xl"
      >
      
 
      
      
      
      <Heading size="md" mb={4} color="#FFFFFF">
        Today's To-Do List
      </Heading>

      <HStack mb={4}>
        <Input
          type="number"
          value={numProblems}
          colorScheme='blackAlpha'
          onChange={(e) => setNumProblems(Number(e.target.value))}
          placeholder="Enter number"
          
          size="md"
        />
        <Button colorScheme="whiteAlpha" onClick={handleGenerate} size="sm">
          Generate
        </Button>
      </HStack>

      {/* ✅ Scrollable List */}
      <VStack
        spacing={3}
        
        flex="1"
        overflowY="auto"
        pr={2} // ✅ small padding to avoid scrollbar overlap
      >
        {todoList.map((item, index) => (
          <HStack
            key={item.id}
            p={3}
            borderRadius="md"
            bg={item.completed ? 'pink.50' : 'gray.50'}
            border="2px solid  #640D5F"
            
            _hover={{  bg: 'gray.100' }}
            transition="all 0.2s"
          >
            <Checkbox
              isChecked={item.completed}
              onChange={() => toggleComplete(index)}
              colorScheme="pink"
            />
            <Input
              value={item.title}
              onChange={(e) => handleTitleChange(index, e.target.value)}
              variant="unstyled"
              fontWeight={item.completed ? 'normal' : 'semibold'}
              textDecoration={item.completed ? 'line-through' : 'none'}
            />
          </HStack>
        ))}
      </VStack>

      {/* ✅ Fixed Progress Bar */}
      {todoList.length > 0 && (
        <Box mt={2}>
          <Text fontSize="sm" mb={1}>
            Progress: {completedCount}/{todoList.length}
          </Text>
          <Progress value={progressPercent} colorScheme='pink' borderRadius="md" />
        </Box>
      )}
    </Box>
  );
}

export default Sidebar;
