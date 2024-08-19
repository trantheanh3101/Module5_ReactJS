import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from 'react';

function StudentList() {
    const [minPoints, setMinPoints] = useState(0);

    const students = [
        { id: 1, name: "Thế Anh", address: "Thanh Hoá", points: 9 },
        { id: 2, name: "Thế Anh 1", address: "Thanh Hoá", points: 4 },
        { id: 3, name: "Thế Anh 2", address: "Thanh Hoá", points: 2 },
        { id: 4, name: "Thế Anh 3", address: "Thanh Hoá", points: 7 }
    ];

    // Lọc danh sách học sinh theo điểm số tối thiểu
    const filteredStudents = students.filter(student => student.points >= minPoints);

    return (
        <div className="container mt-5">
            <div className="mb-3">
                <label htmlFor="minPoints" className="form-label">Filter by minimum points:</label>
                <input
                    type="number"
                    id="minPoints"
                    className="form-control"
                    value={minPoints}
                    onChange={(e) => setMinPoints(Number(e.target.value))}
                />
            </div>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th>Stt</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Points</th>
                </tr>
                </thead>
                <tbody>
                {filteredStudents.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>
                            {item.points === 10 ? "Xuất sắc"
                                : item.points >= 8 ? "Giỏi"
                                    : item.points >= 6.5 ? "Khá"
                                        : item.points >= 5 ? "Trung bình"
                                            : item.points >= 3.5 ? "Yếu"
                                                : "Kém"}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;
