import React from "react";
import SelectShelf from "./SelectShelf";

const WantToRead = ({ wantToRead }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {wantToRead.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`,
                    }}></div>
                  <div className="book-shelf-changer">
                    <SelectShelf book={book} />
                  </div>
                </div>
                <div className="book-title">{`${book.title}`}</div>
                {book.authors.map((author) => (
                  <div className="book-authors" key={author}>{`${author}`}</div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WantToRead;
