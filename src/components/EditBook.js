import React from "react";
import { connect } from "react-redux";
import { getBookById } from "../redux/selectors";
import { matchPath } from "react-router";
import { editBook } from "../redux/actions";

class EditBook extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.bookId);
    this.state = {
      bookId: this.props.book.bookId,
      bookName: this.props.book.bookName,
      author: this.props.book.author
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEditBook = () => {
    this.props.editBook(
      this.state.bookId,
      this.state.bookName,
      this.state.author
    );
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="bookName">Book Name</label>
          <input
            className="form-control"
            name="bookName"
            onChange={this.updateInput}
            value={this.state.bookName}
            placeholder="Enter Book name"
          />
          <small id="bookNameHelp" className="form-text text-muted">
            Make sure to use correct spelling
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            className="form-control"
            name="author"
            onChange={this.updateInput}
            value={this.state.author}
            placeholder="Enter Author"
          />
        </div>

        <button className="btn btn-primary" onClick={this.handleEditBook}>
          Edit Book
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const match = matchPath(window.location.pathname, {
    path: "/edit/:bookId",
    exact: true,
    strict: false
  });

  let params = match != null ? match.params : null;
  let bookId = params != null ? params.bookId : null;
  console.log("mapStateToProps Book Id is " + bookId);
  const book = getBookById(state, bookId);
  return { book };
};

export default connect(
  mapStateToProps,
  { editBook }
)(EditBook);
/*export default connect(
  null,
  {}
)(EditBook);*/
// export default AddTodo;
