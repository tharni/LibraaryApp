import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const { bookId, bookName, author } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, bookId],
        byIds: {
          ...state.byIds,
          [bookId]: {
            bookName: bookName,
            author: author
          }
        }
      };
    }
    case EDIT_BOOK: {
      const { bookId, bookName, author } = action.payload;
      state.byIds[bookId] = {
        bookName: bookName,
        author: author
      };
      const newState = {
        allIds: state.allIds,
        byIds: state.byIds
      };
      return {
        ...newState
      };
    }
    case DELETE_BOOK: {
      const { bookId } = action.payload;
      var index = state.allIds.indexOf(bookId);
      state.allIds.splice(index, 1);
      delete state.byIds[bookId];
      const newState = {
        allIds: state.allIds,
        byIds: state.byIds
      };
      return {
        ...newState
      };
    }
    default:
      return state;
  }
}
