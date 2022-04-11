import { actionTypes } from "../constants/constants";
const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_PRODUCT:
      return { ...state, products: payload };

    default:
      return state;
  }
};
