import React, { useState } from "react";

function AddStudent({ show, onClose, onSave }) {
    const [newStudent, setNewStudent] = useState({
        id: null,
        name: "",
        address: "",
        points: 0
    });

    const handleSaveClick = () => {
        if (newStudent.name && newStudent.address && newStudent.points >= 0 && newStudent.points <= 10) {
            onSave(newStudent);
            onClose();
        } else {
            alert("Please enter valid student details.");
        }
    };
    if (!show) {
        return null;
    }
    return (
        <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New Student</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={newStudent.name}
                                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address:</label>
                            <input
                                type="text"
                                id="address"
                                className="form-control"
                                value={newStudent.address}
                                onChange={(e) => setNewStudent({ ...newStudent, address: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="points" className="form-label">Points:</label>
                            <input
                                type="number"
                                id="points"
                                className="form-control"
                                min="0"
                                max="10"
                                value={newStudent.points}
                                onChange={(e) => setNewStudent({ ...newStudent, points: Number(e.target.value) })}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSaveClick}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddStudent;
