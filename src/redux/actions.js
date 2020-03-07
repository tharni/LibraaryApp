import { ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "./actionTypes";

let nextBookId = 1;

export const addBook = (bookName, author) => ({
  type: ADD_BOOK,
  payload: {
    bookId: nextBookId++,
    bookName: bookName,
    author: author
  }
});

export const deleteBook = bookId => ({
  type: DELETE_BOOK,
  payload: {
    bookId: bookId
  }
});

export const editBook = (bookId, bookName, author) => ({
  type: EDIT_BOOK,
  payload: {
    bookId: bookId,
    bookName: bookName,
    author: author
  }
});
