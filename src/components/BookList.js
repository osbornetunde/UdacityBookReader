import React from "react";
import { withRouter } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";

const BookList = ({ allBooks, history }) => {

  const filters = books => shelf => books.filter(book => book.shelf === shelf);
  const filterBy = filters(allBooks);

  const currentlyReading = filterBy("currentlyReading");
  const wantToRead = filterBy("wantToRead");
  const read = filterBy("read");

  console.log("======>", allBooks);
  

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
