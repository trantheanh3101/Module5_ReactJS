import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .max(100, 'Book name must not exceed 100 characters')
        .required('Book name is required'),
    genreId: Yup.string().required('Genre is required'),
    release_date: Yup.date()
        .max(new Date(), 'Entry date cannot be in the future')
        .required('Entry date is required'),
    quantity: Yup.number()
        .integer('Quantity must be an integer')
        .min(1, 'Quantity must be greater than 0')
        .required('Quantity is required'),
});

function EditBook({ show, onClose, onSave, genres, book }) {
    if (!show || !book) return null;

    return (
        <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Book</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <Formik
                            initialValues={book}
                            validationSchema={validationSchema}
                            onSubmit={onSave}
                        >
                            {() => (
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Book Name:</label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="name" component="div" className="text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="genreId" className="form-label">Genre:</label>
                                        <Field as="select" id="genreId" name="genreId" className="form-select">
                                            <option value="">Select a genre</option>
                                            {genres.map(genre => (
                                                <option key={genre.id} value={genre.id}>
                                                    {genre.category}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="genreId" component="div" className="text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="release_date" className="form-label">Release Date:</label>
                                        <Field
                                            type="date"
                                            id="release_date"
                                            name="release_date"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="release_date" component="div" className="text-danger" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="quantity" className="form-label">Quantity:</label>
                                        <Field
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="quantity" component="div" className="text-danger" />
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
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

export default EditBook;
