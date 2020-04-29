import React from "react";
import Book from "./Book";

const Read = ({ read }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {read.map((book) => (
            <Book result={book} key={book.id}/>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Read;
