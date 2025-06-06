import { createSlice } from "reduxjs/toolkit";
const initialState = {
  pizzaBase: 1000,
};
const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    pizza_order: (state) => {
      state.pizzaBase--;
    },
  },
});
console.log(pizzaSlice);
export default pizzaSlice.reducers;
export const { pizza_order, customer_choice } = pizzaSlice.actions;
