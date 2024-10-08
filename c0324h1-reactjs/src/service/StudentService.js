import axios from 'axios';
import {toast} from "react-toastify";

const API_URL = 'http://localhost:3001/students';

const handleError = (error) => {
    if (!error.response) {
        // Lỗi mạng
        toast.error("Lỗi kết nối mạng. Vui lòng kiểm tra kết nối và thử lại.");
    } else {
        toast.error('Error: ' + error.message);
    }
    throw error;
};

export const getStudents = async (searchName = '', minPoints = 0, maxPoints = 10, topPoints) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                name_like: searchName,
                points_gte: minPoints,
                points_lte: maxPoints,
                _sort: 'points',
                _order: 'desc',
                _limit: topPoints && Number(topPoints) > 0 ? Number(topPoints) : undefined
            }
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};


export const addStudent = async (values) => {
    try {
        const response = await axios.post(API_URL, values);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const saveStudent = async (id, values) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, values);
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const deleteStudent = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        handleError(error);
    }
};
