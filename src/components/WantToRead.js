import React from "react";
import Book from "./Book";

const WantToRead = ({ wantToRead, shelfHandler }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {wantToRead.map((book) => (
            <Book result={book} key={book.id} shelfHandler={shelfHandler} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WantToRead;
