import { addItemToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "TOGGLE_CART":
      return { ...state, hidden: !state.hidden };
    case "ADD_ITEM":
      return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
    default:
      return state;
  }
};
