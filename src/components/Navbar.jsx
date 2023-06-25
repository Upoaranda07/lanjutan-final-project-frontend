// TODO: answer here
import React from "react";
import { Link as ReachLink } from "react-router-dom";
import { Link } from '@chakra-ui/react'


const NavBar = () => {
    return (
        // TODO: answer here
        <div>
            <nav>
                <h1 data-testid="home-page">
                    <Link as={ReachLink} to="/student" data-testid="student-btn">
                        Student Portal
                    </Link>
                </h1>
                <ul>
                    <li>
                        <Link as={ReachLink} to="/student" data-testid="student-page">
                            <button>All Student</button>
                        </Link>
                    </li>
                    <li>
                        <Link as={ReachLink} to="/add" data-testid="add-page">
                            <button>Add Student</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;