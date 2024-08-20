import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from 'react';
import EditStudent from './EditStudent';  // Import modal đã tách riêng
import AddStudent from './AddStudent';  // Import modal đã tách riêng

function StudentList() {
    const [students, setStudents] = useState([]);
    const [minPoints, setMinPoints] = useState(0);
    const [editingStudent, setEditingStudent] = useState(null);
    const [error, setError] = useState("");
    const [showAddModal, setShowAddModal] = useState(false);

    // Khởi tạo danh sách sinh viên trong useEffect
    useEffect(() => {
        const initialStudents = [
            { id: 1, name: "Thế Anh", address: "Thanh Hoá", points: 9 },
            { id: 2, name: "Thế Anh 1", address: "Thanh Hoá", points: 4 },
            { id: 3, name: "Thế Anh 2", address: "Thanh Hoá", points: 2 },
            { id: 4, name: "Thế Anh 3", address: "Thanh Hoá", points: 7 }
        ];
        setStudents(initialStudents);
    }, []);

    // Lọc danh sách học sinh theo điểm số tối thiểu
    const filteredStudents = students.filter(student => student.points >= minPoints);

    // Hàm xử lý khi nhấn nút Edit
    const handleEditClick = (student) => {
        setEditingStudent(student);
        setError("");
    };

    const handleAddStudent = (newStudent) => {
        setStudents([...students, { ...newStudent, id: students.length + 1 }]);
        // Cú pháp ...students là toán tử trải (spread operator),
        // được sử dụng để tạo một bản sao của mảng students hiện tại.
        // Nó lấy tất cả các phần tử trong mảng students và đặt chúng vào một mảng mới.
    };

    // Hàm xử lý khi lưu thay đổi
    const handleSaveClick = () => {
        if (editingStudent.points < 0 || editingStudent.points > 10) {
            setError("Points must be between 0 and 10.");
            return;
        }
        setStudents(students.map(student =>
            student.id === editingStudent.id ? editingStudent : student
        ));
        setEditingStudent(null); // Đóng modal sau khi lưu
    };

    // Hàm xử lý khi nhấn nút Delete
    const handleDeleteClick = (studentId) => {
        // Lọc ra danh sách sinh viên mới, bỏ qua sinh viên có id bằng studentId
        const updatedStudents = students.filter(student => student.id !== studentId);
        setStudents(updatedStudents);
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
                            <button className="btn btn-primary" onClick={() => handleEditClick(item)}>Edit</button>
                            {' '}
                            <button className="btn btn-danger" onClick={() => handleDeleteClick(item.id)}>Delete</button>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>

            {/* Modal */}
            {editingStudent && (
                <EditStudent
                    editingStudent={editingStudent}
                    setEditingStudent={setEditingStudent}
                    handleSaveClick={handleSaveClick}
                />
            )}

            <AddStudent
                show={showAddModal}
                onClose={() => setShowAddModal(false)}
                onSave={handleAddStudent}
            />

            {/* Hiển thị thông báo lỗi nếu có */}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
        </div>
    );
}

export default StudentList;
