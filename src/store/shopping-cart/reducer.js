import { ADD_TO_SHOPPING_CART } from "store/shopping-cart/actions";

const shoppingCart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_CART:
            return [
                ...state,
                {
                    ...action.product
                }
            ];
        default:
            return state
    }
};

export default shoppingCart