import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";

const SelectShelf = ({ book }) => {
  const [shelf, setShelf] = useState("");

  useEffect(() => {
    if (shelf !== "") {
      async function updateData() {
        const response = await BooksAPI.update(book, shelf);
        console.log("=====> result", response);
      }
      updateData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shelf]);

  const shelfHandler = (e) => {
    e.preventDefault();
    setShelf(e.target.value);
  };
  console.log(book.shelf);

  return (
    <select defaultValue={book.shelf} onChange={(e) => shelfHandler(e)}>
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};

export default SelectShelf;
