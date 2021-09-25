import { SET_PRODUCTS } from "../actions";

const initialState = {
  products: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
