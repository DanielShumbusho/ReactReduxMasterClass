import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "../features/pizza/pizzaSlice";
import burgerReducer from "../features/burger/burgerslice";
import productReducer from "../features/products/productSlice";
const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    product: productReducer,
  },
});
export default store;
