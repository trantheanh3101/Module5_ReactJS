import React, { useState, useEffect } from 'react';
import * as BookService from "../../services/BookService";
import "bootstrap/dist/css/bootstrap.css";

function BookList() {
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        const getAllData = async () => {
            try {
                const booksData = await BookService.getBooks(searchName,selectedGenre || null);
                const genresData = await BookService.getGenres();
                setBooks(booksData);
                setGenres(genresData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getAllData();
    }, [searchName,selectedGenre]);
    const getGenreInfo = (genreId) => {
        const genre = genres.find(g => g.id === genreId);
        return genre ? { name: genre.category, description: genre.description } : { name: 'Unknown', description: 'No description' };
    };


    return (
        <div className="container mt-5">
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
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;
