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
  }, [shelf]);

  const shelfHandler = (e) => {
    e.preventDefault();
    setShelf(e.target.value);
  };

  return (
    <select onClick={(e) => shelfHandler(e)}>
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
