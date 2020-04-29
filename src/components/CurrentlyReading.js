import React from "react";
import Book from "./Book";

const CurrentlyReading = ({ currentlyReading }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {currentlyReading.map((book) => (
            <Book result={book} key={book.id}/>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CurrentlyReading;
