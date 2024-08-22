import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import * as StudentService from "../../service/StudentService";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [minPoints, setMinPoints] = useState(0);
    const [editingStudent, setEditingStudent] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [searchName, setSearchName] = useState('');

    useEffect(() => {
        const getAllStudents = async () => {
            try {
                const data = await StudentService.getStudents();
                setStudents(data);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        getAllStudents();
    }, []);

    // Lọc sinh viên dựa trên điểm và tên
    const filteredStudents = students.filter(student =>
        student.points >= minPoints &&
        student.name.toLowerCase().includes(searchName.toLowerCase())
    );

    const handleSaveClick = async (values) => {
        try {
            const updatedStudent = await StudentService.saveStudent(editingStudent.id, values);
            setStudents(students.map(student =>
                student.id === editingStudent.id ? updatedStudent : student
            ));
            setEditingStudent(null); // Close the modal after saving
        } catch (error) {
            console.error('Error updating student:', error);
        }
    };

    const handleAddStudent = async (values) => {
        try {
            const newId = students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
            const newStudent = await StudentService.addStudent({ ...values, id: newId + ""});
            setStudents([...students, newStudent]);
            setShowAddModal(false); // Close the modal after adding
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    const handleDeleteClick = async (studentId) => {
        try {
            await StudentService.deleteStudent(studentId);
            setStudents(students.filter(student => student.id !== studentId));
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="mb-3">
                <label htmlFor="minPoints" className="form-label">Filter by minimum points:</label>
                <input
                    type="number"
                    id="minPoints"
                    className="form-control"
                    min="0"
                    max="10"
                    value={minPoints}
                    onChange={(e) => setMinPoints(Number(e.target.value))}
                />
            </div>

            {/* Thêm Input để tìm kiếm theo tên */}
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

            <button className="btn btn-success mb-3" onClick={() => setShowAddModal(true)}>
                Add New Student
            </button>
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
                {filteredStudents.map((item, index) => (
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

            {/* Modal for editing student */}
            {editingStudent && (
                <EditStudent
                    student={editingStudent}
                    onSave={handleSaveClick}
                    onClose={() => setEditingStudent(null)}
                />
            )}

            {/* Modal for adding new student */}
            <AddStudent
                show={showAddModal}
                onSave={handleAddStudent}
                onClose={() => setShowAddModal(false)}
            />
        </div>
    );
}

export default StudentList;
