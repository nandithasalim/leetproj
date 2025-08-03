import React, { useState, useEffect } from "react";
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
  Center,
  Flex
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const TOP_75_QUESTIONS = [
    { id: 1, title: "Two Sum" },
    { id: 2, title: "Best Time to Buy and Sell Stock" },
    { id: 3, title: "Contains Duplicate" },
    { id: 4, title: "Product of Array Except Self" },
    { id: 5, title: "Maximum Subarray" },
    { id: 6, title: "Maximum Product Subarray" },
    { id: 7, title: "Find Minimum in Rotated Sorted Array" },
    { id: 8, title: "Search in Rotated Sorted Array" },
    { id: 9, title: "3Sum" },
    { id: 10, title: "Container With Most Water" },
    { id: 11, title: "Sum of Two Integers" },
    { id: 12, title: "Number of 1 Bits" },
    { id: 13, title: "Counting Bits" },
    { id: 14, title: "Missing Number" },
    { id: 15, title: "Reverse Bits" },
    { id: 16, title: "Climbing Stairs" },
    { id: 17, title: "Coin Change" },
    { id: 18, title: "Longest Increasing Subsequence" },
    { id: 19, title: "Longest Common Subsequence" },
    { id: 20, title: "Word Break" },
    { id: 21, title: "Combination Sum IV" },
    { id: 22, title: "House Robber" },
    { id: 23, title: "House Robber II" },
    { id: 24, title: "Decode Ways" },
    { id: 25, title: "Unique Paths" },
    { id: 26, title: "Jump Game" },
    { id: 27, title: "Clone Graph" },
    { id: 28, title: "Course Schedule" },
    { id: 29, title: "Pacific Atlantic Water Flow" },
    { id: 30, title: "Number of Islands" },
    { id: 31, title: "Longest Consecutive Sequence" },
    { id: 32, title: "Alien Dictionary" },
    { id: 33, title: "Graph Valid Tree" },
    { id: 34, title: "Word Ladder" },
    { id: 35, title: "Valid Anagram" },
    { id: 36, title: "Group Anagrams" },
    { id: 37, title: "Valid Parentheses" },
    { id: 38, title: "Valid Palindrome" },
    { id: 39, title: "Longest Palindromic Substring" },
    { id: 40, title: "Palindromic Substrings" },
    { id: 41, title: "Encode and Decode Strings" },
    { id: 42, title: "Minimum Window Substring" },
    { id: 43, title: "Valid Sudoku" },
    { id: 44, title: "Word Search" },
    { id: 45, title: "Merge Intervals" },
    { id: 46, title: "Insert Interval" },
    { id: 47, title: "Non-overlapping Intervals" },
    { id: 48, title: "Meeting Rooms" },
    { id: 49, title: "Meeting Rooms II" },
    { id: 50, title: "Rotate Image" },
    { id: 51, title: "Spiral Matrix" },
    { id: 52, title: "Set Matrix Zeroes" },
    { id: 53, title: "Happy Number" },
    { id: 54, title: "Plus One" },
    { id: 55, title: "Add Binary" },
    { id: 56, title: "Implement Trie (Prefix Tree)" },
    { id: 57, title: "Design Add and Search Words Data Structure" },
    { id: 58, title: "Word Search II" },
    { id: 59, title: "Minimum Depth of Binary Tree" },
    { id: 60, title: "Same Tree" },
    { id: 61, title: "Invert Binary Tree" },
    { id: 62, title: "Maximum Depth of Binary Tree" },
    { id: 63, title: "Binary Tree Level Order Traversal" },
    { id: 64, title: "Serialize and Deserialize Binary Tree" },
    { id: 65, title: "Subtree of Another Tree" },
    { id: 66, title: "Construct Binary Tree from Preorder and Inorder Traversal" },
    { id: 67, title: "Validate Binary Search Tree" },
    { id: 68, title: "Kth Smallest Element in a BST" },
    { id: 69, title: "Lowest Common Ancestor of a BST" },
    { id: 70, title: "Implement Queue using Stacks" },
    { id: 71, title: "Implement Stack using Queues" },
    { id: 72, title: "Min Stack" },
    { id: 73, title: "Evaluate Reverse Polish Notation" },
    { id: 74, title: "Generate Parentheses" },
    { id: 75, title: "LRU Cache" },
  ];


  function Top75Todo() {
    const [numPerDay, setNumPerDay] = useState("");
    const [todoList, setTodoList] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem("top75DailyTodo"));
      if (saved) {
        const today = new Date();
        const startDate = new Date(saved.startDate);
  
        // ✅ Calculate difference in days from the start date
        const diffDays = Math.floor(
          (today - startDate) / (1000 * 60 * 60 * 24)
        );
  
        const startIndex = diffDays * saved.numPerDay;
        const list = TOP_75_QUESTIONS.slice(
          startIndex,
          startIndex + saved.numPerDay
        ).map((q) => ({ ...q, completed: false }));
  
        setNumPerDay(saved.numPerDay);
        setTodoList(list);
      }
    }, []);
  
    const generateList = () => {
      if (!numPerDay || numPerDay <= 0) return;
  
      const today = new Date();
      const list = TOP_75_QUESTIONS.slice(0, numPerDay).map((q) => ({
        ...q,
        completed: false,
      }));
  
      setTodoList(list);
      localStorage.setItem(
        "top75DailyTodo",
        JSON.stringify({
          numPerDay,
          startDate: today.toISOString(), // ✅ Save start date
        })
      );
    };
  
    const toggleComplete = (id) => {
      setTodoList((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      );
    };
  
    const completedCount = todoList.filter((item) => item.completed).length;
    const progressPercent = todoList.length
      ? (completedCount / todoList.length) * 100
      : 0;
  
    return (
      <Flex w="100%" h="100vh" bg="#6C63FF" justify="center" align="center" position="relative">
         <Button
      position="absolute"
      top="20px"
      right="20px"
      color="#640D5F"
      bg={"white"}
      variant="outline"
      _hover={{bg: "#640D5F" ,color:"white"}}
      onClick={() => navigate("/")} // ✅ navigate to home
    >
      Home
    </Button>
        <Box
          bg="white"
          w="400px"
          h="600px"
          display="flex"
          flexDirection="column"
          p={4}
          borderRadius="2xl"
          boxShadow="lg"
        >
          <Heading size="md" mb={4} color="#640D5F">
            Top 75 Daily To-Do
          </Heading>
  
          <HStack mb={4}>
            <Input
              type="number"
              value={numPerDay}
              onChange={(e) => setNumPerDay(Number(e.target.value))}
              placeholder="Enter number"
              color="black"
              w="100%"
              bg="white"
              size="md"
            />
            <Button colorScheme="pink" onClick={generateList} size="sm">
              Start
            </Button>
          </HStack>
  
          <VStack spacing={3} flex="1" overflowY="auto" pr={2}>
            {todoList.map((item) => (
              <HStack
                key={item.id}
                p={3}
                borderRadius="md"
                bg={item.completed ? "pink.50" : "gray.50"}
                border="2px solid #640D5F"
                _hover={{ bg: "gray.100" }}
                transition="all 0.2s"
                align="stretch"
                w="100%"
              >
                <Checkbox
                  isChecked={item.completed}
                  onChange={() => toggleComplete(item.id)}
                  colorScheme="pink"
                />
                <Text
                  flex="1"
                  fontWeight={item.completed ? "normal" : "semibold"}
                  textDecoration={item.completed ? "line-through" : "none"}
                >
                  {item.id}. {item.title}
                </Text>
              </HStack>
            ))}
          </VStack>
  
          {todoList.length > 0 && (
            <Box mt={2}>
              <Text fontSize="sm" mb={1}>
                Progress: {completedCount}/{todoList.length}
              </Text>
              <Progress value={progressPercent} colorScheme="pink" borderRadius="md" />
            </Box>
          )}
        </Box>
      </Flex>
    );
  }
  
  export default Top75Todo;
  