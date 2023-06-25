import React from "react";
import { Routes, Route, } from "react-router-dom";
import Home from "./Routes/Home";
import Student from "./Routes/Student";
import AddStudent from "./Routes/AddStudent";
import EditStudent from "./Routes/EditStudent";
import NotFound from "./Routes/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Center, Square, Circle } from '@chakra-ui/react'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddStudent />} />
                <Route path="/Student">
                    <Route index element={<Student />} />
                    <Route path=":id" element={<EditStudent />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App;
