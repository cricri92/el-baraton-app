import {
  ADD_TO_SHOPPING_CART, DECREMENT_PRODUCT_QTY,
  INCREMENT_PRODUCT_QTY,
  REMOVE_FROM_SHOPPING_CART,
  SET_SELECTED_PRODUCT,
  UNSET_SELECTED_PRODUCT
} from "./types";

export const addToShoppingCart = (product, quantity) => ({
  type: ADD_TO_SHOPPING_CART,
  product,
  quantity
});

export const removeFromShoppingCart = productId => ({
  type: REMOVE_FROM_SHOPPING_CART,
  productId
});

export const incrementProductQty = product => ({
  type: INCREMENT_PRODUCT_QTY,
  product
});

export const decrementProductQty = product => ({
  type: DECREMENT_PRODUCT_QTY,
  product
});

export const setSelectedProduct = product => ({
  type: SET_SELECTED_PRODUCT,
   product
});

export const unsetSelectedProduct = () => ({
  type: UNSET_SELECTED_PRODUCT
});