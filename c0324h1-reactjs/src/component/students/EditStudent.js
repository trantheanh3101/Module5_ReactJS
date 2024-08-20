import React from 'react';

function EditStudent({ editingStudent, setEditingStudent, handleSaveClick }) {
    return (
        <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Student</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setEditingStudent(null)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="editName" className="form-label">Name:</label>
                            <input
                                type="text"
                                id="editName"
                                className="form-control"
                                value={editingStudent.name}
                                onChange={(e) =>
                                    setEditingStudent({ ...editingStudent, name: e.target.value })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="editAddress" className="form-label">Address:</label>
                            <input
                                type="text"
                                id="editAddress"
                                className="form-control"
                                value={editingStudent.address}
                                onChange={(e) =>
                                    setEditingStudent({ ...editingStudent, address: e.target.value })
                                }
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="editPoints" className="form-label">Points:</label>
                            <input
                                type="number"
                                id="editPoints"
                                className="form-control"
                                value={editingStudent.points}
                                min="0"
                                max="10"
                                onChange={(e) =>
                                    setEditingStudent({ ...editingStudent, points: Number(e.target.value) })}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setEditingStudent(null)}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSaveClick}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditStudent;
