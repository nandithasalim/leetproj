import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Checkbox,
  Button,
  VStack,
  HStack,
  Container,
  Badge,
  useToast,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { ExternalLinkIcon, CopyIcon } from "@chakra-ui/icons";

import { useNavigate } from "react-router-dom";

const questions = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    leetcodeUrl: "https://leetcode.com/problems/two-sum/",
    description: "Find two numbers in an array that add up to a target value"
  },
  {
    id: 2,
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
    description: "Check if a string of parentheses is valid"
  },
  {
    id: 3,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    leetcodeUrl: "https://leetcode.com/problems/merge-two-sorted-lists/",
    description: "Merge two sorted linked lists into one sorted list"
  },
  {
    id: 4,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array",
    leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    description: "Find the maximum profit from buying and selling stock"
  },
  {
    id: 5,
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String",
    leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/",
    description: "Check if a string is a palindrome after removing non-alphanumeric characters"
  },
  {
    id: 6,
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    leetcodeUrl: "https://leetcode.com/problems/invert-binary-tree/",
    description: "Invert a binary tree by swapping left and right children"
  },
  {
    id: 7,
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    leetcodeUrl: "https://leetcode.com/problems/climbing-stairs/",
    description: "Find the number of ways to climb n stairs"
  },
  {
    id: 8,
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array",
    leetcodeUrl: "https://leetcode.com/problems/maximum-subarray/",
    description: "Find the contiguous subarray with the largest sum"
  },
  {
    id: 9,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Tree",
    leetcodeUrl: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    description: "Return the level order traversal of a binary tree"
  },
  {
    id: 10,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String",
    leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    description: "Find the length of the longest substring without repeating characters"
  }
];

function Challenge() {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [generatedLink, setGeneratedLink] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const handleQuestionToggle = (questionId) => {
    setSelectedQuestions(prev => 
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "green";
      case "Medium": return "orange";
      case "Hard": return "red";
      default: return "gray";
    }
  };

  const generateLink = () => {
    if (selectedQuestions.length === 0) {
      toast({
        title: "No questions selected",
        description: "Please select at least one question to proceed",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const selectedQuestionsData = questions.filter(q => selectedQuestions.includes(q.id));
    const linkData = {
      questions: selectedQuestionsData,
      timestamp: new Date().toISOString(),
      count: selectedQuestionsData.length
    };

    // Create a shareable link (in a real app, you'd save this to a database)
    const encodedData = btoa(JSON.stringify(linkData));
    const shareableLink = `${window.location.origin}/challenge/${encodedData}`;
    
    setGeneratedLink(shareableLink);
    onOpen();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    toast({
      title: "Link copied!",
      description: "The challenge link has been copied to your clipboard",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const selectedQuestionsData = questions.filter(q => selectedQuestions.includes(q.id));

  return (
    <Box
      w="100%"
      minH="100vh"
      bg="#6C63FF"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={6}
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
      <Container maxW="800px">
        <Box
          bg="white"
          p={8}
          borderRadius="2xl"
          boxShadow="lg"
          maxH="90vh"
          overflowY="auto"
        >
          <VStack spacing={6} align="stretch">
            <Box textAlign="center">
              <Heading size="lg" color="#640D5F" mb={2}>
                🎯 LeetCode Challenge Creator
              </Heading>
              <Text color="gray.600">
                Select questions to create a custom challenge
              </Text>
            </Box>

            <HStack justify="space-between" align="center">
              <Text fontWeight="bold" color="gray.700">
                Available Questions ({questions.length})
              </Text>
              <Badge colorScheme="blue" variant="subtle">
                {selectedQuestions.length} selected
              </Badge>
            </HStack>

            <VStack spacing={3} align="stretch" maxH="400px" overflowY="auto">
              {questions.map((question) => (
                <Box
                  key={question.id}
                  p={4}
                  border="2px solid"
                  borderColor={selectedQuestions.includes(question.id) ? "#6C63FF" : "gray.200"}
                  borderRadius="lg"
                  bg={selectedQuestions.includes(question.id) ? "blue.50" : "white"}
                  cursor="pointer"
                  onClick={() => handleQuestionToggle(question.id)}
                  _hover={{ borderColor: "#6C63FF", bg: "blue.50" }}
                  transition="all 0.2s"
                >
                  <HStack justify="space-between" align="start">
                    <VStack align="start" spacing={1} flex={1}>
                      <HStack>
                        <Checkbox
                          isChecked={selectedQuestions.includes(question.id)}
                          onChange={() => handleQuestionToggle(question.id)}
                          colorScheme="purple"
                        />
                        <Text fontWeight="bold" fontSize="lg">
                          {question.title}
                        </Text>
                      </HStack>
                      <Text color="gray.600" fontSize="sm">
                        {question.description}
                      </Text>
                      <HStack spacing={2}>
                        <Badge colorScheme={getDifficultyColor(question.difficulty)}>
                          {question.difficulty}
                        </Badge>
                        <Badge colorScheme="gray" variant="outline">
                          {question.category}
                        </Badge>
                      </HStack>
                    </VStack>
                    <Tooltip label="View on LeetCode">
                      <IconButton
                        as={Link}
                        href={question.leetcodeUrl}
                        isExternal
                        icon={<ExternalLinkIcon />}
                        size="sm"
                        colorScheme="blue"
                        variant="ghost"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </Tooltip>
                  </HStack>
                </Box>
              ))}
            </VStack>

            <Button
              colorScheme="purple"
              size="lg"
              onClick={generateLink}
              isDisabled={selectedQuestions.length === 0}
              leftIcon={<ExternalLinkIcon />}
            >
               Create Challenge Link
            </Button>

            {selectedQuestions.length > 0 && (
              <Box p={4} bg="blue.50" borderRadius="lg">
                <Text fontWeight="bold" mb={2}>
                  Selected Questions ({selectedQuestions.length}):
                </Text>
                <VStack align="start" spacing={1}>
                  {selectedQuestionsData.map((question) => (
                    <Text key={question.id} fontSize="sm">
                      • {question.title} ({question.difficulty})
                    </Text>
                  ))}
                </VStack>
              </Box>
            )}
          </VStack>
        </Box>
      </Container>

      {/* Modal for generated link */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Challenge Link Created!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={4} align="stretch">
              <Text>
                Your challenge with <strong>{selectedQuestionsData.length} questions</strong> has been created!
              </Text>
              
              <Box p={4} bg="gray.50" borderRadius="md">
                <Text fontWeight="bold" mb={2}>Shareable Link:</Text>
                <HStack>
                  <Input
                    value={generatedLink}
                    isReadOnly
                    bg="white"
                    fontSize="sm"
                  />
                  <Tooltip label="Copy link">
                    <IconButton
                      icon={<CopyIcon />}
                      onClick={copyToClipboard}
                      colorScheme="blue"
                    />
                  </Tooltip>
                </HStack>
              </Box>

              <Text fontSize="sm" color="gray.600">
                Share this link with others to challenge them with the same set of questions!
              </Text>

              <Button
                as={Link}
                href={generatedLink}
                colorScheme="green"
                leftIcon={<ExternalLinkIcon />}
              >
                Open Challenge
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Challenge;
