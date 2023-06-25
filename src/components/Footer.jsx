// TODO: answer here
import React from "react";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Footer = () => {

    const location = useLocation();
    const isNotFoundPage = location.pathname === "/not-found";

    if (isNotFoundPage) {
        return null; // Don't render the footer on the NotFound page
    }
    return (
        <Box className="footer">
            <p className="studentName">Andreas Bagus Upo Aranda</p>
            <span>-</span>
            <p className="studentId">FE5597787</p>
        </Box>
        // TODO: answer here
    );
};

export default Footer;
