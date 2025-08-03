import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  Badge,
  useToast,
  Link,
  IconButton,
  Tooltip,
  Divider,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ExternalLinkIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useParams, useNavigate } from "react-router-dom";

function ChallengeView() {
  const [challengeData, setChallengeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { challengeId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    try {
      // Decode the challenge data from the URL
      const decodedData = atob(challengeId);
      const data = JSON.parse(decodedData);
      setChallengeData(data);
    } catch (err) {
      setError("Invalid challenge link");
      toast({
        title: "Invalid Link",
        description: "This challenge link is not valid or has expired",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }, [challengeId, toast]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "green";
      case "Medium": return "orange";
      case "Hard": return "red";
      default: return "gray";
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <Box
        w="100%"
        minH="100vh"
        bg="#6C63FF"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={4}>
          <Spinner size="xl" color="white" />
          <Text color="white" fontSize="lg">Loading challenge...</Text>
        </VStack>
      </Box>
    );
  }

  if (error) {
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
        <Container maxW="600px">
          <Box
            bg="white"
            p={8}
            borderRadius="2xl"
            boxShadow="lg"
            textAlign="center"
          >
            <Alert status="error" borderRadius="md" mb={4}>
              <AlertIcon />
              {error}
            </Alert>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/challenge")}
              leftIcon={<ArrowBackIcon />}
            >
              Back to Challenge Creator
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

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
            {/* Header */}
            <Box textAlign="center">
              <Heading size="lg" color="#640D5F" mb={2}>
                 LeetCode Challenge
              </Heading>
              <Text color="gray.600">
                Complete these {challengeData.count} questions to master your skills!
              </Text>
            </Box>

            {/* Challenge Info */}
            <Box p={4} bg="blue.50" borderRadius="lg">
              <HStack justify="space-between" align="center">
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold" fontSize="lg">
                    Challenge Details
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    Created on {formatDate(challengeData.timestamp)}
                  </Text>
                </VStack>
                <Badge colorScheme="purple" fontSize="md" p={2}>
                  {challengeData.count} Questions
                </Badge>
              </HStack>
            </Box>

            <Divider />

            {/* Questions List */}
            <Box>
              <Text fontWeight="bold" fontSize="lg" mb={4} color="gray.700">
                Questions to Complete:
              </Text>
              <VStack spacing={3} align="stretch">
                {challengeData.questions.map((question, index) => (
                  <Box
                    key={question.id}
                    p={4}
                    border="2px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    bg="white"
                    _hover={{ borderColor: "#6C63FF", bg: "blue.50" }}
                    transition="all 0.2s"
                  >
                    <HStack justify="space-between" align="start">
                      <VStack align="start" spacing={2} flex={1}>
                        <HStack>
                          <Badge colorScheme="blue" variant="solid" minW="30px" textAlign="center">
                            {index + 1}
                          </Badge>
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
                      <VStack spacing={2}>
                        <Tooltip label="Solve on LeetCode">
                          <IconButton
                            as={Link}
                            href={question.leetcodeUrl}
                            isExternal
                            icon={<ExternalLinkIcon />}
                            size="md"
                            colorScheme="green"
                            variant="solid"
                          />
                        </Tooltip>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>

            {/* Action Buttons */}
            <VStack spacing={3}>
              <Button
                colorScheme="green"
                size="lg"
                w="100%"
                as={Link}
                href="https://leetcode.com/problemset/all/"
                isExternal
                leftIcon={<ExternalLinkIcon />}
              >
                🚀 Start Solving on LeetCode
              </Button>
              
              <Button
                colorScheme="purple"
                variant="outline"
                onClick={() => navigate("/challenge")}
                leftIcon={<ArrowBackIcon />}
              >
                Create Your Own Challenge
              </Button>
            </VStack>

            {/* Progress Tracking */}
            <Box p={4} bg="gray.50" borderRadius="lg">
              <Text fontWeight="bold" mb={2}>
                📊 Challenge Progress
              </Text>
              <Text fontSize="sm" color="gray.600">
                Track your progress by marking questions as completed. 
                You can use the LeetCode links above to solve each problem.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

export default ChallengeView; 