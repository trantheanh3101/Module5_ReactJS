import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema for the form
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    points: Yup.number()
        .min(0, 'Points must be at least 0')
        .max(10, 'Points must be at most 10')
        .required('Points are required')
});

function EditStudent({ student, onSave, onClose }) {
    return (
        <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Student</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <Formik
                            initialValues={student}
                            validationSchema={validationSchema}
                            onSubmit={onSave}
                        >
                            {() => (
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name:</label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="name" component="div" className="text-danger" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Address:</label>
                                        <Field
                                            type="text"
                                            id="address"
                                            name="address"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="address" component="div" className="text-danger" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="points" className="form-label">Points:</label>
                                        <Field
                                            type="number"
                                            id="points"
                                            name="points"
                                            className="form-control"
                                            min="0"
                                            max="10"
                                        />
                                        <ErrorMessage name="points" component="div" className="text-danger" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditStudent;
