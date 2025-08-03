import React, { useState } from "react";
import {
  Box,
  Heading,
  Textarea,
  Button,
  VStack,
  Text,
  Spinner,
  HStack,
  Badge,
  Divider,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
function Explain() {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const explainCode = async () => {
    setLoading(true);
    setExplanation("");
    setError("");
    
    try {
      const res = await fetch("http://localhost:3001/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      
      const data = await res.json();
      
      if (data.error) {
        setError(data.error);
        return;
      }
      
      setExplanation(data.explanation || "No explanation generated.");
    } catch (err) {
      setError("Error: Unable to explain code. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

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
      <Box
        bg="white"
        p={6}
        borderRadius="2xl"
        boxShadow="lg"
        w="800px"
        maxW="95%"
        maxH="90vh"
        overflowY="auto"
      >
        <Heading size="lg" mb={6} color="#640D5F" textAlign="center">
          🤖 AI Code Explainer
        </Heading>
        
        <Text fontSize="sm" color="gray.600" mb={4} textAlign="center">
          Get detailed line-by-line explanations of your code 
        </Text>

        <VStack spacing={4} align="stretch">
          <Box>
            <Text fontWeight="bold" mb={2} color="gray.700">
              📝 Paste Your Code:
            </Text>
            <Textarea
              placeholder="// Paste your code here...
function example() {
  console.log('Hello World');
}"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              bg="gray.50"
              color="black"
              border="2px solid"
              borderColor="gray.200"
              _focus={{ borderColor: "#6C63FF" }}
              rows={10}
              fontFamily="mono"
              fontSize="sm"
            />
          </Box>

          <Button
            colorScheme="purple"
            size="lg"
            onClick={explainCode}
            isDisabled={!code.trim() || loading}
            leftIcon={loading ? <Spinner size="sm" /> : null}
          >
            {loading ? "Analyzing Code..." : " Explain Code Line by Line"}
          </Button>

          {error && (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              {error}
            </Alert>
          )}

          {explanation && (
            <Box>
              <HStack mb={3}>
                <Text fontWeight="bold" color="gray.700">
                  📖 Line-by-Line Explanation:
                </Text>
                <Badge colorScheme="green" variant="subtle">
                  Powered by Gemini AI
                </Badge>
              </HStack>
              
              <Box 
                bg="gray.50" 
                p={4} 
                borderRadius="lg" 
                border="1px solid"
                borderColor="gray.200"
                maxH="400px" 
                overflowY="auto"
              >
                <Text 
                  whiteSpace="pre-wrap" 
                  fontFamily="mono"
                  fontSize="sm"
                  lineHeight="1.6"
                >
                  {explanation}
                </Text>
              </Box>
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
}

export default Explain;
