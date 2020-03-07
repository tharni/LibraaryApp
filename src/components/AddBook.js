import React from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/actions";

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
      author: ""
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddBook = () => {
    this.props.addBook(this.state.bookName, this.state.author);
    this.setState({
      bookName: "",
      author: ""
    });
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

        <button className="btn btn-primary" onClick={this.handleAddBook}>
          Add Book
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addBook }
)(AddBook);
// export default AddTodo;
