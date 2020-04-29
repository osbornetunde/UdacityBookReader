import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "../components/Book";

const Search = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [allBooks, setAllBooks] = useState("");
  const [bookShelf, setBookShelf] = useState([]);

  useEffect(() => {
    if (searchTerm !== "") {
      async function getData() {
        const response = await BooksAPI.search(searchTerm);
        setBookShelf(
          allBooks.filter((element) =>
            response.some((book) => element.id === book.id)
          )
        );
        setResults(response);
      }
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  useEffect(() => {
    BooksAPI.getAll().then((data) => {
      setAllBooks(data);
    });
  }, []);

  const searchValueHandler = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const backToHomepage = () => {
    history.push("/");
  };

  results.map((result) => {
    if (!result.shelf) {
      result.shelf = "none";
    }
    bookShelf.map((book) => {
      if (result.id === book.id) {
        result.shelf = book.shelf;
      }
    });
  });

  const renderResult = () => {
    return results === undefined || searchTerm === "" ? (
      <div>No Match found</div>
    ) : (
      results.map((result) => {
        return (
          <Book result={result} key={result.id}/>
        );
      })
    );
  };

  return (
    <div className="search-results">
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
        <ol className="books-grid">{renderResult()}</ol>
      </div>
    </div>
  );
};

export default withRouter(Search);
