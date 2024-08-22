import axios from 'axios';

const API_URL = 'http://localhost:5000/students';

export const getStudents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
};

export const addStudent = async (values) => {
    try {
        const response = await axios.post(API_URL, values);
        return response.data;
    } catch (error) {
        console.error('Error adding student:', error);
        throw error;
    }
};

export const saveStudent = async (id, values) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, values);
        return response.data;
    } catch (error) {
        console.error('Error updating student:', error);
        throw error;
    }
};

export const deleteStudent = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error;
    }
};
