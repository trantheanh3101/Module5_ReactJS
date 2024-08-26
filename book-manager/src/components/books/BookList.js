import React, { useState, useEffect } from 'react';
import * as BookService from "../../services/BookService";
import "bootstrap/dist/css/bootstrap.css";
import AddBook from './AddBook';
import {toast} from "react-toastify";
import EditBook from "./EditBook"; // Thay đổi đường dẫn theo cấu trúc dự án của bạn

function BookList() {
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');
    const [showAddBookModal, setShowAddBookModal] = useState(false); // State để quản lý modal
    const [showEditBookModal, setShowEditBookModal] = useState(false);
    const [currentBook, setCurrentBook] = useState(null);

    useEffect(() => {
        const getAllData = async () => {
            try {
                const booksData = await BookService.getBooks(searchName, selectedGenre || null);
                const genresData = await BookService.getGenres();
                setBooks(booksData);
                setGenres(genresData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getAllData();
    }, [searchName, selectedGenre]);

    const handleShowAddBookModal = () => setShowAddBookModal(true);
    const handleCloseAddBookModal = () => setShowAddBookModal(false);
    const handleShowEditBookModal = (book) => {
        setCurrentBook(book);
        setShowEditBookModal(true);
    };
    const handleCloseEditBookModal = () => setShowEditBookModal(false);
    const handleAddBook = async (values) => {
        try {
            const existingIds = books.map(book => book.id);
            let newId;
            do {
                newId = `BO-${Math.floor(1000 + Math.random() * 9000)}`;
            } while (existingIds.includes(newId));
            const newBook = await BookService.addBook({...values, id: newId});
            setBooks([...books,newBook]);
            handleCloseAddBookModal();
            toast.success("Thêm mới thành công!!!")
        } catch (e){}
    };

    const handleDeleteClick = async (bookId) => {
        try {
            await BookService.deleteBook(bookId);
            setBooks(books.filter(book => book.id !== bookId));
            toast.success("Xóa thành công!!!")
        } catch (e) {
        }
    }

    const handleEditBook = async (values) => {
        try {
            const updatedBook = await BookService.updateBook(values);
            setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
            handleCloseEditBookModal();
            toast.success("Cập nhật thành công!!!");
        } catch (e) {
            console.error("Error updating book:", e);
        }
    };

    const getGenreInfo = (genreId) => {
        const genre = genres.find(g => g.id === genreId);
        return genre ? { name: genre.category, description: genre.description } : { name: 'Unknown', description: 'No description' };
    };


    return (
        <div className="container mt-5">
            <div className="mb-4">
                <button className="btn btn-primary" onClick={handleShowAddBookModal}>Add New Book</button>
            </div>

            <div className="input-group mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by book name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="genreSelect" className="form-label">Filter by Genre</label>
                <select
                    id="genreSelect"
                    className="form-select"
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                >
                    <option value="">All Genres</option>
                    {genres.map(genre => (
                        <option key={genre.id} value={genre.id}>
                            {genre.category}
                        </option>
                    ))}
                </select>
            </div>

            {books.length === 0 ? (
                <div className="alert alert-info">
                    Không có thông tin sách này
                </div>
            ) : (
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th>Stt</th>
                    <th>Name Book</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Release Date</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) => (
                    <tr key={book.id}>
                        <td>{index + 1}</td>
                        <td>{book.name}</td>
                        <td>{getGenreInfo(book.genreId).name}</td>
                        <td>{getGenreInfo(book.genreId).description}</td>
                        <td>{book.release_date}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => handleShowEditBookModal(book)}>Edit
                            </button>
                            {' '}
                            <button className="btn btn-danger" onClick={() => handleDeleteClick(book.id)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            )};

            {/* Modal for Adding New Book */}
            <AddBook
                show={showAddBookModal}
                onClose={handleCloseAddBookModal}
                onSave={handleAddBook}
                genres={genres}
            />

            <EditBook
                show={showEditBookModal}
                onClose={handleCloseEditBookModal}
                onSave={handleEditBook}
                genres={genres}
                book={currentBook}
            />
        </div>
    );
}

export default BookList;
