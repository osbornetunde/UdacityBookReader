import React from "react";

const SelectShelf = ({ book, shelfHandler }) => {
  return (
    <select defaultValue={book.shelf} onChange={(e) => shelfHandler(e, book)}>
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
