import {ADD_TO_SHOPPING_CART, SET_SELECTED_PRODUCT, UNSET_SELECTED_PRODUCT} from "store/shopping-cart/types";

const initialState = {
    productList: [],
    selectedProduct: null
};

const shoppingCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_CART:
            return {
                ...state,
                productList: [
                  ...state.productList,
                  action.product
                ]
            };
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.product
            };
        case UNSET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: null
            };
        default:
            return state;
    }
};


export default shoppingCart