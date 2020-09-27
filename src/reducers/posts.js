import { FETCH_POSTS } from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};