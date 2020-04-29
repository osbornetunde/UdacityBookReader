import React from "react";
import { withRouter } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";

const BookList = ({ allBooks, history }) => {
  const currentlyReading = allBooks.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = allBooks.filter((book) => book.shelf === "wantToRead");
  const read = allBooks.filter((book) => book.shelf === "read");

  const goToSearchPage = () => {
    history.push("/search");
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading currentlyReading={currentlyReading} />
          <Read read={read} />
          <WantToRead wantToRead={wantToRead} />
        </div>
      </div>
      <div className="open-search">
        <button onClick={goToSearchPage}>Add a book</button>
      </div>
    </div>
  );
};

export default withRouter(BookList);
