const initialState = {
  hidden: true
};

export default (state = initialState, { type }) => {
  switch (type) {
    case "TOGGLE_CART":
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};
