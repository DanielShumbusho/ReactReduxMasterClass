import { createStore } from "redux";
import pizzaReducer from "./Pizza/PizzaReducers";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
