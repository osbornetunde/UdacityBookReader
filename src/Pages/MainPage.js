import React from "react";
import BookList from "./../components/BookList";
import * as BooksAPI from "../BooksAPI";

class MainPage extends React.Component {
  state = {
    allBooks: [],
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll()
      this.setState({ allBooks: books });
    
  }

  render() {
    return <BookList allBooks={this.state.allBooks} />;
  }
}

export default MainPage;
