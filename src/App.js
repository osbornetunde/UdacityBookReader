import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import Search from "./Pages/Search";

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
