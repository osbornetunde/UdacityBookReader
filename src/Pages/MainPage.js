import React from "react";
import BookList from "./../components/BookList";
import * as BooksAPI from "../BooksAPI";

class MainPage extends React.Component {
  state = {
    allBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState({ allBooks: data });
    });
  }

  render() {
    return <BookList allBooks={this.state.allBooks} />;
  }
}

export default MainPage;
