import { Order_Burger } from "./BurgerType";

const initialState = {
  burgerBuns: 200,
};

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Order_Burger:
      return {
        ...state,
        burgerBuns: state.burgerBuns - action.payload,
      };
    default:
      return state;
  }
};
