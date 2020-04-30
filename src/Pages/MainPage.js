import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import BookList from "./../components/BookList";
import * as BooksAPI from "../BooksAPI";
import Search from "../Pages/Search";

const MainPage = () => {
  const [allBooks, setAllBooks] = useState("");
  const [shelf, setShelf] = useState("");
  const [updatedBook, setUpdatedBook] = useState("");
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    async function getAllBooks() {
      const books = await BooksAPI.getAll();
      setAllBooks(books);
    }
    getAllBooks();
  }, [updated]);

  useEffect(() => {
    if (shelf !== "") {
      async function updateData() {
        const response = await BooksAPI.update(updatedBook, shelf);
        setUpdated(response);
      }
      updateData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shelf]);

  const shelfHandler = (e, book) => {
    e.preventDefault();
    setShelf(e.target.value);
    setUpdatedBook(book);
  };

  return (
    <Switch>
      <Route exact path="/">
        {allBooks && (
          <BookList allBooks={allBooks} shelfHandler={shelfHandler} />
        )}
      </Route>
      <Route path="/search">
        <Search shelfHandler={shelfHandler} />
      </Route>
    </Switch>
  );
};

export default MainPage;
