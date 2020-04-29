import React from 'react'
import SelectShelf from './SelectShelf';


const Book = ({ result }) => {

console.log("========> key", result.id)

    return(
        <li>
            <div className="book">
              <div className="book-top">
                {result.imageLinks && result.imageLinks.thumbnail ? (
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 192,
                      backgroundImage: `url(${result.imageLinks.thumbnail})`,
                    }}></div>
                ) : (
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 192,
                    }}></div>
                )}
                <div className="book-shelf-changer">
                  <SelectShelf book={result} />
                </div>
              </div>
              <div className="book-title">{`${result.title}`}</div>
              {result.authors &&
                result.authors.map((author) => (
                  <div className="book-authors" key={author}>{`${author}`}</div>
                ))}
            </div>
          </li>
    )
}

export default Book;