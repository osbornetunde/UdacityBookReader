import React from "react";
import SelectShelf from "./SelectShelf";

const Read = ({ read }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {read.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 192,
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

export default Read;
