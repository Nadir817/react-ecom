export const toggleCart = () => ({
  type: "TOGGLE_CART"
});

export const addItem = payload => ({
  type: "ADD_ITEM",
  payload
});

export const clearCartItem = payload => ({
  type: "CLEAR_CART_ITEM",
  payload
});

export const removeItem = payload => ({
  type: "REMOVE_ITEM",
  payload
});
