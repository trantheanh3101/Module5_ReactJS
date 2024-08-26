import axios from 'axios';

const API_URL = " http://localhost:3001"; // Cập nhật đường dẫn đến API hoặc file JSON

export const getBooks = async (searchName = '',selectedGenre = '') => {
    try {
        // Giả sử API hỗ trợ truy vấn với tham số tìm kiếm, ví dụ: `?name_like=searchName`
        const response = await axios.get(`${API_URL}/books`, {
            params: {
                name_like: searchName,
                genreId: selectedGenre,
                _sort: "quantity",
                _order: 'asc'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
};

export const getGenres = async () => {
    try {
        const response = await axios.get(`${API_URL}/genres`);
        return response.data;
    } catch (error) {
        console.error("Error fetching genres:", error);
        throw error;
    }
};

export const addBook = async (book) => {
    try {
        const response = await axios.post(`${API_URL}/books`, book);
        return response.data;
    } catch (error) {
        console.error("Error adding book:", error);
        throw error;
    }
};

export const deleteBook = async (bookId) => {
    try {
        await axios.delete(`${API_URL}/books/${bookId}`);
    } catch (error) {
    }
}

export const updateBook = async (book) => {
    const response = await axios.put(`${API_URL}/books/${book.id}`, book);
    return response.data;
};
