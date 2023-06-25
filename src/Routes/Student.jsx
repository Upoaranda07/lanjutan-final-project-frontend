import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Select, Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import Navbar from "../components/Navbar";

const Student = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [facultyFilter, setFacultyFilter] = useState('All');
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All')

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:3001/student');
            const data = await response.json();
            setStudents(data);
            setFilteredStudents(data);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching students:', error);
        }
    };

    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);

        if (selectedFilter === 'All') {
            setFilteredStudents(students);
        } else {
            const filtered = students.filter((student) => student.faculty === selectedFilter);
            setFilteredStudents(filtered);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/student/${id}`, { method: 'DELETE' });
            const updatedStudents = students.filter((student) => student.id !== id);
            setStudents(updatedStudents);
            setFilteredStudents(updatedStudents);
        } catch (error) {
            console.log('Error deleting student:', error);
        }
    };

    return (
        <>
            <Navbar />
            <Box p={4}>
                <h1>All Students</h1>
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                    <Box>
                        <label htmlFor="faculty-filter">Filter by Faculty:</label>
                        <Select
                            id="faculty-filter"
                            value={facultyFilter}
                            onChange={handleFilterChange}
                            data-testid="filter"
                            mb={4}
                            maxWidth="200px"
                        >
                            <option value="All">All</option>
                            <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                            <option value="Fakultas Ilmu Sosial dan Politik">
                                Fakultas Ilmu Sosial dan Politik
                            </option>
                            <option value="Fakultas Teknik">Fakultas Teknik</option>
                            <option value="Fakultas Teknologi Informasi dan Sains">
                                Fakultas Teknologi Informasi dan Sains
                            </option>
                        </Select>
                        <TableContainer>
                            <Table variant="striped">
                                <Thead>
                                    <Tr>
                                        <Th>No</Th>
                                        <Th>Full Name</Th>
                                        <Th>Faculty</Th>
                                        <Th>Program Study</Th>
                                        <Th>Option</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {filteredStudents.map((student, index) => (
                                        <Tr key={student.id} className="student-data-row">
                                            <Td>{index + 1}</Td>
                                            <Td>
                                                <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                                            </Td>
                                            <Td>{student.faculty}</Td>
                                            <Td>{student.programStudy}</Td>
                                            <Td>
                                                <Button
                                                    data-testid={`delete-${student.id}`}
                                                    onClick={() => handleDelete(student.id)}
                                                    colorScheme="red"
                                                    size="sm"
                                                >
                                                    Delete
                                                </Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}
                <Box className="footer" style={{ marginTop: '20px', textAlign: 'center' }}>
                    {/* Your footer content */}
                </Box>
            </Box>
        </>
    );
};

export default Student;
