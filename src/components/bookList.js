import React from "react";
import { connect } from "react-redux";
import Book from "./Book";
import { getBooks } from "../redux/selectors";
const Books = ({ books }) => (
  <ul className="todo-list">
    {books && books.length
      ? books.map((book, index) => {
          return <Book key={book.bookId} book={book} />;
        })
      : "No books added!"}
  </ul>
);

const mapStateToProps = state => {
  const books = getBooks(state);
  return { books };
};

export default connect(mapStateToProps)(Books);
