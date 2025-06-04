const store = require("./app/store");
const pizzaActions = require("./features/pizza/pizzaSlice").pizzaActions;
const burgerAction = require("./features/burger/burgerSlice").burgerAction;
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
store.dispatch(burgerAction.burger_order());
store.dispatch(pizzaActions.pizza_order());
unsubscribe();
