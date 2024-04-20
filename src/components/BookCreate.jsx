import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
    const [title, setTitle] = useState("title");
    const [des, setDes] = useState("des");

    const handleChangeDes = (e) => {
        setDes(e.target.value);
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, des };
        // console.log(book);
        onCreate(book);
    };

    return (
        <div className="container">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label className="b1" htmlFor="title">Title</label>
                <input className="b2"
                    onChange={handleChangeTitle}
                    type="text"
                    id="title"
                    value={title}
                />
                <label htmlFor="des">Description</label>
                <input className="b3" onChange={handleChangeDes} type="text" id="des" value={des} />
                <input type="submit" value="Create!" />
            </form>
        </div>
    );
};

export default BookCreate;
