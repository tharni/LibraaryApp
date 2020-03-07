export const getBooksState = store => store.books;

export const getBookList = store =>
  getBooksState(store) ? getBooksState(store).allIds : [];

export const getBookById = (store, bookId) =>
  getBooksState(store) ? { ...getBooksState(store).byIds[bookId], bookId } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getBooks = store =>
  getBookList(store).map(bookId => getBookById(store, bookId));
