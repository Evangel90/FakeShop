import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
      {
        id:1,
        title: 'Evangel',
        category: 'programmer',
      }
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
    // state = initial state done by myself
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
