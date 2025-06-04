const store = require("./app/store");
const { fetchProducts } = require("./features/products/productSlice");
const pizzaActions = require("./features/pizza/pizzaSlice").pizzaActions;
const burgerAction = require("./features/burger/burgerSlice").burgerAction;
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  //   console.log("Updated state", store.getState());
});
store.dispatch(fetchProducts());
// store.dispatch(pizzaActions.pizza_order());
// store.dispatch(burgerAction.burger_order());
unsubscribe();
