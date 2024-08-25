import axios from 'axios';

const API_URL = 'http://localhost:3001/students';

export const getStudents = async (searchName = '', minPoints = 0, topPoints) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                name_like: searchName,
                points_gte: minPoints,
                _sort: 'points',
                _order: 'desc',
                _limit: topPoints && Number(topPoints) > 0 ? Number(topPoints) : undefined
            }
        });
        return response.data;
    } catch (error) {
        window.alert("error : " + error.message);
        throw error;
    }
};

export const addStudent = async (values) => {
    try {
        const response = await axios.post(API_URL, values);
        return response.data;
    } catch (error) {
        window.alert('error : ' + error.message);
        throw error;
    }
};

export const saveStudent = async (id, values) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, values);
        return response.data;
    } catch (error) {
        window.alert('error : ' + error.message);
        throw error;
    }
};

export const deleteStudent = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        window.alert('error : ' + error.message);
        throw error;
    }
};
