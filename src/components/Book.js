import React from "react";
import { connect } from "react-redux";
import { deleteBook } from "../redux/actions";
import { Link } from "react-router-dom";

class Book extends React.Component {
  handleDeleteBook = bookId => {
    alert("delete function" + bookId);
    this.props.deleteBook(bookId);
  };

  render() {
    return (
      <ul>
        <li>
          {this.props.book.bookName}, {this.props.book.author}
          <span className="left-space" />
          <Link
            to={"/edit/" + this.props.book.bookId}
            className="btn btn-primary"
          >
            Edit Book
          </Link>
          <span className="left-space" />
          <button
            className="btn btn-primary"
            onClick={() => this.handleDeleteBook(this.props.book.bookId)}
          >
            Delete Book
          </button>
          <span className="spacer" />
        </li>
      </ul>
    );
  }
}

export default connect(
  null,
  { deleteBook }
)(Book);
