import { createStore } from "redux";
import pizzaReducer from "./Pizza/PizzaReducers";

const store = createStore(pizzaReducer);

export default store;
