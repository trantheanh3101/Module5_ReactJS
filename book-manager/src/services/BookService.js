import axios from 'axios';

const API_URL = " http://localhost:3001"; // Cập nhật đường dẫn đến API hoặc file JSON

export const getBooks = async (searchName = '',selectedGenre = '') => {
    try {
        // Giả sử API hỗ trợ truy vấn với tham số tìm kiếm, ví dụ: `?name_like=searchName`
        const response = await axios.get(`${API_URL}/books`, {
            params: {
                name_like: searchName,
                genreId: selectedGenre
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


