// TODO: answer here
import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate("/");
    };
    return (
        <>
            <Box p={4}>
                <h1>404 - Page Not Found</h1>
                <p>The requested page could not be found.</p>
                <Button colorScheme="blue" onClick={handleBackHome}>
                    Go Back to Home
                </Button>
            </Box> {/* TODO: answer here */}
        </>
    );
};

export default NotFound;
