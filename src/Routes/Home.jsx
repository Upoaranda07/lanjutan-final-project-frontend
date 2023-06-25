import React from "react";
import { Heading, Button, Link as ChakraLink, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Box textAlign="center" py={10} bg="blue.500" color="white">
            <Heading as="h2" size="xl" mb={5}>Student Portal</Heading>
            <ChakraLink as={Link} to="/student" data-testid="student-btn">
                <Button colorScheme="teal" size="lg">All Students</Button>
            </ChakraLink>
        </Box>
    );
};

export default Home;
