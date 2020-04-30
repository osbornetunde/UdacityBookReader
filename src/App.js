import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <MainPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
