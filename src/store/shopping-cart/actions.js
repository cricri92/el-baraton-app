import {ADD_TO_SHOPPING_CART, SET_SELECTED_PRODUCT, UNSET_SELECTED_PRODUCT} from "./types";

export const addToShoppingCart = (product, quantity) => ({
  type: ADD_TO_SHOPPING_CART,
  product,
  quantity
});

export const setSelectedProduct = product => ({
  type: SET_SELECTED_PRODUCT,
   product
});

export const unsetSelectedProduct = () => ({
  type: UNSET_SELECTED_PRODUCT
});
