import { combineReducers } from "redux";
import pizzaReducer from "./Pizza/PizzaReducers";
import { burgerReducer } from "./burger/BurgerReducer";
import productReducer from "./products/ProductReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
  product: productReducer,
});
export default rootReducer;
