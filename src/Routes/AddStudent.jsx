import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Button, Input, Box, Select } from '@chakra-ui/react';

const AddStudent = () => {
    const [fullname, setFullname] = useState('');
    const [profilePicture, setProfilePicture] = useState("");
    const [birthdate, setBirthdate] = useState('');
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState('');
    const [programStudy, setProgramStudy] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let faculty = '';
        if (programStudy === 'Ekonomi' || programStudy === 'Manajemen' || programStudy === 'Akuntansi') {
            faculty = 'Fakultas Ekonomi';
        } else if (programStudy === 'Administrasi Publik' || programStudy === 'Administrasi Bisnis' || programStudy === 'Hubungan Internasional') {
            faculty = 'Fakultas Ilmu Sosial dan Politik';
        } else if (programStudy === 'Teknik Sipil' || programStudy === 'Arsitektur') {
            faculty = 'Fakultas Teknik';
        } else if (programStudy === 'Matematika' || programStudy === 'Fisika' || programStudy === 'Informatika') {
            faculty = 'Fakultas Teknologi Informasi dan Sains';
        }

        const newStudent = {
            fullname,
            profilePicture,
            address,
            phoneNumber,
            birthDate: birthdate,
            gender,
            faculty,
            programStudy,
        };

        fetch('http://localhost:3001/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        })
            .then(() => {
                navigate('/student');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Navbar />
            <Box p={4} bg="gray.200">
                <form onSubmit={handleSubmit}>
                    <Box mb={4}>
                        <label htmlFor="fullname">Fullname:</label>
                        <Input
                            variant='filled'
                            type="text"
                            id="fullname"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            data-testid="name"
                        />
                    </Box>
                    <Box mb={4}>
                        <label htmlFor="profilePicture">Profile Picture:</label>
                        <Input
                            variant='filled'
                            type="text"
                            id="profilePicture"
                            value={profilePicture}
                            onChange={(e) => setProfilePicture(e.target.value)}
                            data-testid="profilePicture"
                        />
                    </Box>
                    <Box mb={4}>
                        <label htmlFor="address">Address:</label>
                        <Input
                            variant='filled'
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            data-testid="address"
                        />
                    </Box>
                    <Box mb={4}>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <Input
                            variant='filled'
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            data-testid="phoneNumber"
                        />
                    </Box>
                    <Box mb={4}>
                        <label htmlFor="birthdate">Birth Date:</label>
                        <Input
                            variant='filled'
                            type="text"
                            id="birthdate"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            data-testid="date"
                        />
                    </Box>
                    <Box mb={4}>
                        <label htmlFor="gender">Gender:</label>
                        <Select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                            data-testid="gender"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Select>
                    </Box>
                    <Box mb={4}>
                        <label htmlFor="programStudy">Program Study:</label>
                        <Select
                            value={programStudy}
                            onChange={(e) => setProgramStudy(e.target.value)}
                            required
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
                        </Select>
                    </Box>
                    <Button type="submit" colorScheme="red" data-testid="add-btn">Submit</Button>
                </form>
            </Box>
        </>
    );
};

export default AddStudent;
