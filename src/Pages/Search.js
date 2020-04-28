import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import SelectShelf from "../components/SelectShelf";

const Search = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm !== "") {
      async function getData() {
        const response = await BooksAPI.search(searchTerm);
        setResults(response);
      }
      getData();
    }
  }, [searchTerm]);

  const searchValueHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const backToHomepage = () => {
    history.push("/");
  };

  const renderResult = () => {
    return results === undefined ? (
      <div>No Match found</div>
    ) : (
      results.map((result) => {
        return (
          <li key={result.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 192,
                    backgroundImage: `url(${result.imageLinks.thumbnail})`,
                  }}></div>
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
        );
      })
    );
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={backToHomepage}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={searchValueHandler}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {renderResult()}
        </ol>
      </div>
    </div>
  );
};

export default withRouter(Search);
