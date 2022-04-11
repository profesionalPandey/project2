import { actionTypes } from "../constants/constants";
export const setProduct = (products) => {
  return {
    type: actionTypes.SET_PRODUCT,
    payload: products,
  };
};
export const selectedProduct = (products) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload: products,
  };
};
