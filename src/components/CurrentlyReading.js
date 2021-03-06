import React from "react";
import Book from "./Book";

const CurrentlyReading = ({ currentlyReading, shelfHandler }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentlyReading.map((book) => (
            <Book result={book} key={book.id} shelfHandler={shelfHandler} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CurrentlyReading;
