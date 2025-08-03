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
const TOP_QUESTIONS = [
  { id: 1, title: "Two Sum" },
  { id: 2, title: "Add Two Numbers" },
  { id: 3, title: "Longest Substring Without Repeating Characters" },
  { id: 4, title: "Median of Two Sorted Arrays" },
  { id: 5, title: "Longest Palindromic Substring" },
  { id: 6, title: "Zigzag Conversion" },
  { id: 7, title: "Reverse Integer" },
  { id: 8, title: "String to Integer (atoi)" },
  { id: 9, title: "Palindrome Number" },
  { id: 10, title: "Regular Expression Matching" },
  { id: 11, title: "Container With Most Water" },
  { id: 12, title: "Integer to Roman" },
  { id: 13, title: "Roman to Integer" },
  { id: 14, title: "Longest Common Prefix" },
  { id: 15, title: "3Sum" },
  { id: 16, title: "3Sum Closest" },
  { id: 17, title: "Letter Combinations of a Phone Number" },
  { id: 18, title: "4Sum" },
  { id: 19, title: "Remove Nth Node From End of List" },
  { id: 20, title: "Valid Parentheses" },
  { id: 21, title: "Merge Two Sorted Lists" },
  { id: 22, title: "Generate Parentheses" },
  { id: 23, title: "Merge k Sorted Lists" },
  { id: 24, title: "Swap Nodes in Pairs" },
  { id: 25, title: "Reverse Nodes in k-Group" },
  { id: 26, title: "Remove Duplicates from Sorted Array" },
  { id: 27, title: "Remove Element" },
  { id: 28, title: "Find the Index of the First Occurrence in a String" },
  { id: 29, title: "Divide Two Integers" },
  { id: 30, title: "Substring with Concatenation of All Words" },
  { id: 31, title: "Next Permutation" },
  { id: 32, title: "Longest Valid Parentheses" },
  { id: 33, title: "Search in Rotated Sorted Array" },
  { id: 34, title: "Find First and Last Position of Element in Sorted Array" },
  { id: 35, title: "Search Insert Position" },
  { id: 36, title: "Valid Sudoku" },
  { id: 37, title: "Sudoku Solver" },
  { id: 38, title: "Count and Say" },
  { id: 39, title: "Combination Sum" },
  { id: 40, title: "Combination Sum II" },
  { id: 41, title: "First Missing Positive" },
  { id: 42, title: "Trapping Rain Water" },
  { id: 43, title: "Multiply Strings" },
  { id: 44, title: "Wildcard Matching" },
  { id: 45, title: "Jump Game II" },
  { id: 46, title: "Permutations" },
  { id: 47, title: "Permutations II" },
  { id: 48, title: "Rotate Image" },
  { id: 49, title: "Group Anagrams" },
  { id: 50, title: "Pow(x, n)" },
  { id: 51, title: "N-Queens" },
  { id: 52, title: "N-Queens II" },
  { id: 53, title: "Maximum Subarray" },
  { id: 54, title: "Spiral Matrix" },
  { id: 55, title: "Jump Game" },
  { id: 56, title: "Merge Intervals" },
  { id: 57, title: "Insert Interval" },
  { id: 58, title: "Length of Last Word" },
  { id: 59, title: "Spiral Matrix II" },
  { id: 60, title: "Permutation Sequence" },
  { id: 61, title: "Rotate List" },
  { id: 62, title: "Unique Paths" },
  { id: 63, title: "Unique Paths II" },
  { id: 64, title: "Minimum Path Sum" },
  { id: 65, title: "Valid Number" },
  { id: 66, title: "Plus One" },
  { id: 67, title: "Add Binary" },
  { id: 68, title: "Text Justification" },
  { id: 69, title: "Sqrt(x)" },
  { id: 70, title: "Climbing Stairs" },
  { id: 71, title: "Simplify Path" },
  { id: 72, title: "Edit Distance" },
  { id: 73, title: "Set Matrix Zeroes" },
  { id: 74, title: "Search a 2D Matrix" },
  { id: 75, title: "Sort Colors" },
  { id: 76, title: "Minimum Window Substring" },
  { id: 77, title: "Combinations" },
  { id: 78, title: "Subsets" },
  { id: 79, title: "Word Search" },
  { id: 80, title: "Remove Duplicates from Sorted Array II" },
  { id: 81, title: "Search in Rotated Sorted Array II" },
  { id: 82, title: "Remove Duplicates from Sorted List II" },
  { id: 83, title: "Remove Duplicates from Sorted List" },
  { id: 84, title: "Largest Rectangle in Histogram" },
  { id: 85, title: "Maximal Rectangle" },
  { id: 86, title: "Partition List" },
  { id: 87, title: "Scramble String" },
  { id: 88, title: "Merge Sorted Array" },
  { id: 89, title: "Gray Code" },
  { id: 90, title: "Subsets II" },
  { id: 91, title: "Decode Ways" },
  { id: 92, title: "Reverse Linked List II" },
  { id: 93, title: "Restore IP Addresses" },
  { id: 94, title: "Binary Tree Inorder Traversal" },
  { id: 95, title: "Unique Binary Search Trees II" },
  { id: 96, title: "Unique Binary Search Trees" },
  { id: 97, title: "Interleaving String" },
  { id: 98, title: "Validate Binary Search Tree" },
  { id: 99, title: "Recover Binary Search Tree" },
  { id: 100, title: "Same Tree" },
  { id: 101, title: "Symmetric Tree" },
  { id: 102, title: "Binary Tree Level Order Traversal" },
  { id: 103, title: "Binary Tree Zigzag Level Order Traversal" },
  { id: 104, title: "Maximum Depth of Binary Tree" },
  { id: 105, title: "Construct Binary Tree from Preorder and Inorder Traversal" },
  { id: 106, title: "Construct Binary Tree from Inorder and Postorder Traversal" },
  { id: 107, title: "Binary Tree Level Order Traversal II" },
  { id: 108, title: "Convert Sorted Array to Binary Search Tree" },
  { id: 109, title: "Convert Sorted List to Binary Search Tree" },
  { id: 110, title: "Balanced Binary Tree" },
  { id: 111, title: "Minimum Depth of Binary Tree" },
  { id: 112, title: "Path Sum" },
  { id: 113, title: "Path Sum II" },
  { id: 114, title: "Flatten Binary Tree to Linked List" },
  { id: 115, title: "Distinct Subsequences" },
  { id: 116, title: "Populating Next Right Pointers in Each Node" },
  { id: 117, title: "Populating Next Right Pointers in Each Node II" },
  { id: 118, title: "Pascal's Triangle" },
  { id: 119, title: "Pascal's Triangle II" },
  { id: 120, title: "Triangle" },
  { id: 121, title: "Best Time to Buy and Sell Stock" },
  { id: 122, title: "Best Time to Buy and Sell Stock II" },
  { id: 123, title: "Best Time to Buy and Sell Stock III" },
  { id: 124, title: "Binary Tree Maximum Path Sum" },
  { id: 125, title: "Valid Palindrome" },
  { id: 126, title: "Word Ladder II" },
  { id: 127, title: "Word Ladder" },
  { id: 128, title: "Longest Consecutive Sequence" },
  { id: 129, title: "Sum Root to Leaf Numbers" },
  { id: 130, title: "Surrounded Regions" },
  { id: 131, title: "Palindrome Partitioning" },
  { id: 132, title: "Palindrome Partitioning II" },
  { id: 133, title: "Clone Graph" },
  { id: 134, title: "Gas Station" },
  { id: 135, title: "Candy" },
  { id: 136, title: "Single Number" },
  { id: 137, title: "Single Number II" },
  { id: 138, title: "Copy List with Random Pointer" },
  { id: 139, title: "Word Break" },
  { id: 140, title: "Word Break II" },
  { id: 141, title: "Linked List Cycle" },
  { id: 142, title: "Linked List Cycle II" },
  { id: 143, title: "Reorder List" },
  { id: 144, title: "Binary Tree Preorder Traversal" },
  { id: 145, title: "Binary Tree Postorder Traversal" },
  { id: 146, title: "LRU Cache" },
  { id: 147, title: "Insertion Sort List" },
  { id: 148, title: "Sort List" },
  { id: 149, title: "Max Points on a Line" },
  { id: 150, title: "Evaluate Reverse Polish Notation" },
];

function Top150Todo() {
  const navigate = useNavigate();
  const [numPerDay, setNumPerDay] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("dailyTodo"));
    if (saved) {
      const today = new Date();
      const startDate = new Date(saved.startDate);

      const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
      const startIndex = diffDays * saved.numPerDay;
      const list = TOP_QUESTIONS.slice(startIndex, startIndex + saved.numPerDay).map(q => ({
        ...q,
        completed: false
      }));

      setNumPerDay(saved.numPerDay);
      setTodoList(list);
    }
  }, []);

  const handleStart = () => {
    const today = new Date();
    const list = TOP_QUESTIONS.slice(0, numPerDay).map(q => ({
      ...q,
      completed: false
    }));

    setTodoList(list);
    localStorage.setItem(
      "dailyTodo",
      JSON.stringify({
        numPerDay,
        startDate: today.toISOString()
      })
    );
  };

  const toggleComplete = (id) => {
    setTodoList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = todoList.filter(item => item.completed).length;
  const progressPercent = todoList.length
    ? (completedCount / todoList.length) * 100
    : 0;

  return (
    
    <Flex
      w="100%"
      h="100vh"
      bg="#6C63FF"
      justify="center"
      align="center"
      position="relative"
    >
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
          Top 150 Daily To-Do
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
          <Button colorScheme="pink" onClick={handleStart} size="sm">
            Start
          </Button>
        </HStack>

        {/* ✅ Scrollable List */}
        <VStack spacing={3} flex="1" overflowY="auto" pr={2}>
          {todoList.map((item) => (
            <HStack
              key={item.id}
              p={3}
              borderRadius="md"
              bg={item.completed ? 'pink.50' : 'gray.50'}
              border="2px solid #640D5F"
              _hover={{ bg: 'gray.100' }}
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
                fontWeight={item.completed ? 'normal' : 'semibold'}
                textDecoration={item.completed ? 'line-through' : 'none'}
              >
                {item.id}. {item.title}
              </Text>
            </HStack>
          ))}
        </VStack>

        {/* ✅ Progress Bar */}
        {todoList.length > 0 && (
          <Box mt={2}>
            <Text fontSize="sm" mb={1}>
              Progress: {completedCount}/{todoList.length}
            </Text>
            <Progress value={progressPercent} colorScheme='pink' borderRadius="md" />
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default Top150Todo;