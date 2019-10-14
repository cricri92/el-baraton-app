import {ADD_TO_SHOPPING_CART, SET_SELECTED_PRODUCT, UNSET_SELECTED_PRODUCT} from "store/shopping-cart/types";

const initialState = {
    productList: [],
    totalCartProducts: 0,
    selectedProduct: null
};

const shoppingCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_CART:
            const existInCart = state.productList.find(product => product.product.id === action.product.id);

            return {
                ...state,
                productList: [
                  ...state.productList.filter(product => product.product.id !== action.product.id),
                  {
                      product: action.product,
                      quantity: existInCart ? existInCart.quantity + action.quantity : action.quantity
                  }
                ],
                totalCartProducts: state.totalCartProducts + action.quantity
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