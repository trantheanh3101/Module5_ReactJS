import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import * as StudentService from "../../service/StudentService";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

function StudentList() {
    const [students, setStudents] = useState([]);
    const [minPoints, setMinPoints] = useState(0);
    const [maxPoints, setMaxPoints] = useState(10);
    const [topPoints, setTopPoints] = useState("");
    const [editingStudent, setEditingStudent] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [searchName, setSearchName] = useState('');
    const [showFilters, setShowFilters] = useState(false); // State to manage showing filters

    useEffect(() => {
        const getAllStudents = async (searchName, minPoints, maxPoints, topPoints) => {
            try {
                const data = await StudentService.getStudents(searchName, minPoints, maxPoints, topPoints);
                setStudents(data);
            } catch (error) {}
        };
        getAllStudents(searchName, minPoints, maxPoints, topPoints);
    }, [searchName, minPoints, maxPoints, topPoints]);

    const handleSaveClick = async (values) => {
        try {
            const updatedStudent = await StudentService.saveStudent(editingStudent.id, values);
            setStudents(students.map(student =>
                student.id === editingStudent.id ? updatedStudent : student
            ));
            setEditingStudent(null); // Close the modal after saving
            toast.success(`Chỉnh sửa " + ${updatedStudent.name} + "thành công!!!`)
        } catch (error) {}
    };

    const handleAddStudent = async (values) => {
        try {
            const newId = students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
            const newStudent = await StudentService.addStudent({ ...values, id: newId + "" });
            setStudents([...students, newStudent]);
            setShowAddModal(false); // Close the modal after adding
            toast.success("Thêm mới thành công!!!")
        } catch (error) {}
    };

    const handleDeleteClick = async (studentId) => {
        try {
            await StudentService.deleteStudent(studentId);
            setStudents(students.filter(student => student.id !== studentId));
            toast.success("Xoá thành công!!!")
        } catch (error) {}
    };

    const toggleFilters = () => setShowFilters(!showFilters); // Toggle filter visibility

    return (
        <div className="container mt-5">
            {/*<button className="btn btn-success mx-2" onClick={() => window.location.href='/listTeacher'}>ListTeacher</button>*/}
            <Link className="btn btn-primary" to="/listTeacher">ListTeacher</Link>
            <button className="btn btn-success mx-2" onClick={() => setShowAddModal(true)}>
                Add New Student
            </button>
            <button className="btn btn-info mx-2" onClick={toggleFilters}>
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
                        <label htmlFor="maxPoints" className="form-label">Filter by maximum points:</label>
                        <input
                            type="number"
                            id="maxPoints"
                            className="form-control"
                            min="0"
                            max="10"
                            placeholder="Enter maximum points"
                            onChange={(e) => setMaxPoints(Number(e.target.value))}
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
