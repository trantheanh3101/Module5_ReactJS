import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import * as StudentService from "../../service/StudentService";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [minPoints, setMinPoints] = useState(0);
    const [topPoints, setTopPoints] = useState("");
    const [editingStudent, setEditingStudent] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [searchName, setSearchName] = useState('');
    const [showFilters, setShowFilters] = useState(false); // State to manage showing filters

    useEffect(() => {
        const getAllStudents = async (searchName, minPoints, topPoints) => {
            try {
                const data = await StudentService.getStudents(searchName, minPoints, topPoints);
                setStudents(data);
            } catch (error) {
                window.alert('Error fetching students: ' + error.message);
            }
        };
        getAllStudents(searchName, minPoints, topPoints);
    }, [searchName, minPoints, topPoints]);

    const handleSaveClick = async (values) => {
        try {
            const updatedStudent = await StudentService.saveStudent(editingStudent.id, values);
            setStudents(students.map(student =>
                student.id === editingStudent.id ? updatedStudent : student
            ));
            setEditingStudent(null); // Close the modal after saving
        } catch (error) {
            window.alert('Error updating student: ' + error.message);
        }
    };

    const handleAddStudent = async (values) => {
        try {
            const newId = students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
            const newStudent = await StudentService.addStudent({ ...values, id: newId + "" });
            setStudents([...students, newStudent]);
            setShowAddModal(false); // Close the modal after adding
        } catch (error) {
            window.alert('Error adding student: ' + error.message);
        }
    };

    const handleDeleteClick = async (studentId) => {
        try {
            await StudentService.deleteStudent(studentId);
            setStudents(students.filter(student => student.id !== studentId));
        } catch (error) {
            window.alert('Error deleting student: ' + error.message);
        }
    };

    const toggleFilters = () => setShowFilters(!showFilters); // Toggle filter visibility

    return (
        <div className="container mt-5">
            <button className="btn btn-success mb-3" onClick={() => setShowAddModal(true)}>
                Add New Student
            </button>
            <button className="btn btn-info mb-3" onClick={toggleFilters}>
                {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            {showFilters && (
                <>
                    <div className="mb-3">
                        <label htmlFor="minPoints" className="form-label">Filter by minimum points:</label>
                        <input
                            type="number"
                            id="minPoints"
                            className="form-control"
                            min="0"
                            max="10"
                            placeholder="Enter points"
                            onChange={(e) => setMinPoints(Number(e.target.value))}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="topPoints" className="form-label">Filter by top students points:</label>
                        <input
                            type="text"
                            id="topPoints"
                            className="form-control"
                            placeholder="Enter top points"
                            onChange={(e) => setTopPoints(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="searchName" className="form-label">Search by name:</label>
                        <input
                            type="text"
                            id="searchName"
                            className="form-control"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                    </div>
                </>
            )}
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th>Stt</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Point</th>
                    <th>Academic Performance</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {students.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.points}</td>
                        <td>
                            {item.points === 10 ? "Xuất sắc"
                                : item.points >= 8 ? "Giỏi"
                                    : item.points >= 6.5 ? "Khá"
                                        : item.points >= 5 ? "Trung bình"
                                            : item.points >= 3.5 ? "Yếu"
                                                : "Kém"}
                        </td>
                        <td>
                            <button className="btn btn-primary" onClick={() => setEditingStudent(item)}>Edit</button>
                            {' '}
                            <button className="btn btn-danger" onClick={() => handleDeleteClick(item.id)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {editingStudent && (
                <EditStudent
                    student={editingStudent}
                    onSave={handleSaveClick}
                    onClose={() => setEditingStudent(null)}
                />
            )}

            <AddStudent
                show={showAddModal}
                onSave={handleAddStudent}
                onClose={() => setShowAddModal(false)}
            />
        </div>
    );
}

export default StudentList;
