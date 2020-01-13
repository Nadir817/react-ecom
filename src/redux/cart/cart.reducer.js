import { addItemToCart, removeItemFromCart } from "./cart.utils";

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
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };
    case "CLEAR_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== payload.id)
      };
    default:
      return state;
  }
};
