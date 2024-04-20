import BookList from "./components/BookList";

import { CreateBook, DeleteBook, FetchBooks, UpdateBook } from "./api";
import BookCreate from "./components/BookCreate";
import { useState, useEffect } from "react";
import "./App.css";


const App = () => {
    const [books, setBooks] = useState([]);
    const handleDelete = async (id) => {
        const book = await DeleteBook(id);
        console.log(book);
        setBooks(books.filter((item) => item.id !== book.id));
    }

    const handleCreate = async (term) => {
        const book = await CreateBook(term);
        if (book) setBooks([...books, book]);
    };

    const handleUpdate = async (id, term) => {
        console.log({ id, term });
        const book = await UpdateBook(id, term);
        setBooks(
            books.map((item) => item.id === book.id ? book : item)
        );
    };

    useEffect(async () => {
        const tams = await FetchBooks();
        setBooks(tams);
    }, []);
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <h1>Reading Books</h1>
                <div>
                    <BookList books={books} onDelete={handleDelete} onEdit={handleUpdate} />
                </div>
            </div>
            <BookCreate onCreate={handleCreate} />
        </div>
    );
};

export default App;
