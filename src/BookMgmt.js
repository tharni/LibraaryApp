import React from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/bookList";
import { Link } from "react-router-dom";
export default function BookMgmt() {
  return (
    <div>
      <div>&nbsp;</div>
      <div>
        {" "}
        <Link to={"/create"} className="nav-link">
          Create Books
        </Link>
      </div>
      <div>
        {" "}
        <Link to={"/all"} className="nav-link">
          Show Books
        </Link>
      </div>
    </div>
  );
}
