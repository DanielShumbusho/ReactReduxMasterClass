import { orderPizza } from "./PizzaActions";
import { Order_Pizza } from "./PizzaTypes";
const initialState = {
  pizzaBase: 1000,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case Order_Pizza:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};

export default pizzaReducer;
