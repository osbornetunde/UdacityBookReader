import React from "react";
import { useHistory } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";

const BookList = ({ allBooks, shelfHandler }) => {
  const history = useHistory();

  const filters = (books) => (shelf) =>
    books?.filter((book) => book.shelf === shelf);
  const filterBy = filters(allBooks);

  const currentlyReading = filterBy("currentlyReading");
  const wantToRead = filterBy("wantToRead");
  const read = filterBy("read");

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
          <CurrentlyReading
            currentlyReading={currentlyReading}
            shelfHandler={shelfHandler}
          />
          <Read read={read} shelfHandler={shelfHandler} />
          <WantToRead wantToRead={wantToRead} shelfHandler={shelfHandler} />
        </div>
      </div>
      <div className="open-search">
        <button onClick={goToSearchPage}>Add a book</button>
      </div>
    </div>
  );
};

export default BookList;
