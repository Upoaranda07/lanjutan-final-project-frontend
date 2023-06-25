import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const EditStudent = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        profilePicture: "",
        address: "",
        phoneNumber: "",
        birthDate: "",
        gender: "",
        programStudy: "",
        faculty: "",
    });
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/student/${id}`);
                const studentData = await response.json();
                setFormData(studentData);
                setLoading(false);
                setIsDataLoaded(true);
            } catch (error) {
                console.error(error);
                setLoading(false);
                setIsDataLoaded(true);
            }
        };

        fetchStudentData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let updatedFaculty = "";

        const facultyMapping = {
            Ekonomi: "Fakultas Ekonomi",
            Manajemen: "Fakultas Ekonomi",
            Akuntansi: "Fakultas Ekonomi",
            "Administrasi Publik": "Fakultas Ilmu Sosial dan Politik",
            "Administrasi Bisnis": "Fakultas Ilmu Sosial dan Politik",
            "Hubungan Internasional": "Fakultas Ilmu Sosial dan Politik",
            "Teknik Sipil": "Fakultas Teknik",
            Arsitektur: "Fakultas Teknik",
            Matematika: "Fakultas Teknologi Informasi dan Sains",
            Fisika: "Fakultas Teknologi Informasi dan Sains",
            Informatika: "Fakultas Teknologi Informasi dan Sains",
        };

        if (name === "programStudy" && facultyMapping.hasOwnProperty(value)) {
            updatedFaculty = facultyMapping[value];
        }

        setFormData({
            ...formData,
            [name]: value,
            faculty: updatedFaculty,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch(`http://localhost:3001/student/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            navigate("/student");
        } catch (error) {
            console.error(error);
        }
    };

    if (!isDataLoaded) {
        return <p>Loading ...</p>;
    }

    return (
        <>
            <Navbar />
            <Box className="container">
                <h1 className="text-dark mt-4 mb-4">Edit Student</h1>
                <div className="d-flex justify-content-center">
                    <img src={formData.profilePicture} alt="Profile" className="img-fluid" />
                </div>
                <form onSubmit={handleSubmit} className="text-dark">
                    <div>
                        <label htmlFor="fullname" className="form-label fs-5">
                            Full Name:
                        </label>
                        <Input variant='outline'
                            type="text"
                            id="fullname"
                            className="form-control form-control-lg"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            data-testid="name"
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="address" className="form-label fs-5">
                            Address:
                        </label>
                        <Input variant='outline'
                            type="text"
                            id="address"
                            className="form-control form-control-lg"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            data-testid="address"
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="phoneNumber" className="form-label fs-5">
                            Phone Number:
                        </label>
                        <Input variant='outline'
                            type="text"
                            id="phoneNumber"
                            className="form-control form-control-lg"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            data-testid="phoneNumber"
                        />
                    </div>
                    <div className="row row-cols-2 mt-3">
                        <div col-6>
                            <label htmlFor="birthDate" className="form-label fs-5">
                                Birth Date:
                            </label>
                            <Input variant='outline'
                                type="date"
                                id="birthDate"
                                className="form-control form-control-lg"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleChange}
                                data-testid="date"
                            />
                        </div>
                        <div col-6>
                            <label htmlFor="gender" className="form-label fs-5">
                                Gender:
                            </label>
                            <select
                                id="gender"
                                className="form-control form-control-lg"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                data-testid="gender"
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="programStudy" className="form-label fs-5">
                            Program Study:
                        </label>
                        <select
                            id="programStudy"
                            className="form-control form-control-lg"
                            name="programStudy"
                            value={formData.programStudy}
                            onChange={handleChange}
                            data-testid="prody"
                        >
                            <option value="">Select Program Study</option>
                            <option value="Ekonomi">Ekonomi</option>
                            <option value="Manajemen">Manajemen</option>
                            <option value="Akuntansi">Akuntansi</option>
                            <option value="Administrasi Publik">Administrasi Publik</option>
                            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                            <option value="Hubungan Internasional">Hubungan Internasional</option>
                            <option value="Teknik Sipil">Teknik Sipil</option>
                            <option value="Arsitektur">Arsitektur</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Fisika">Fisika</option>
                            <option value="Informatika">Informatika</option>
                        </select>
                    </div>
                    <Button type="submit" colorScheme='red' data-testid="edit-btn">Edit Student</Button>
                </form>
            </Box>
        </>
    );
};

export default EditStudent;
