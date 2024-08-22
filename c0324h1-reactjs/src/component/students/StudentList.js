import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from 'react';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';

function StudentList() {
    const [students, setStudents] = useState([]);
    const [minPoints, setMinPoints] = useState(0);
    const [editingStudent, setEditingStudent] = useState(null);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        const initialStudents = [
            { id: 1, name: "Thế Anh", address: "Thanh Hoá", points: 9 },
            { id: 2, name: "Thế Anh 1", address: "Thanh Hoá", points: 4 },
            { id: 3, name: "Thế Anh 2", address: "Thanh Hoá", points: 2 },
            { id: 4, name: "Thế Anh 3", address: "Thanh Hoá", points: 7 }
        ];
        setStudents(initialStudents);
    }, []);

    const filteredStudents = students.filter(student => student.points >= minPoints);

    const handleSaveClick = (values) => {
        setStudents(students.map(student =>
            student.id === editingStudent.id ? { ...editingStudent, ...values } : student
        ));
        setEditingStudent(null); // Close the modal after saving
    };

    const handleAddStudent = (values) => {
        setStudents([...students, { ...values, id: students.length + 1 }]);
        setShowAddModal(false); // Close the modal after adding
    };

    const handleDeleteClick = (studentId) => {
        setStudents(students.filter(student => student.id !== studentId));
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
                            <button className="btn btn-danger" onClick={() => handleDeleteClick(item.id)}>Delete</button>
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
