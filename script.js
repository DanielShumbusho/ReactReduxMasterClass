const redux = require("redux");
const createStore = redux.createStore;
// console.log("welcome to redux");

const Order_Pizza = "Order_Pizza";
const Order_Burger = "Order_Burger";
//Action in Redux
// const action = {
//   type: Order_Pizza,
//   shop_name: "Pizza Shop",
// };

//Action creator
function orderPizza() {
  return {
    type: Order_Pizza,
    shop_name: "Pizza Shop",
  };
}

function orderBurger() {
  return {
    type: Order_Burger,
  };
}

//Reducer
const initialState = {
  pizzaBase: 100,
  burgerBuns: 200,
  //   toppings: ["cheese", "capsicum"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Order_Pizza:
      return {
        ...state, //for when an object has a lot of keys we copy the whole object
        pizzaBase: state.pizzaBase - 1, //and then only update what we need
      };
    case Order_Burger:
      return {
        ...state,
        burgerBuns: state.burgerBuns - 1,
      };
    default:
      return state;
  }
};

//Store
//1- Store needs to hold the application states

const store = createStore(reducer); //because the reducer has the state and action

//2-Exposes the getState method which gives accesss to th ecurrent state in the store
console.log("Initial State:", store.getState()); //will print the initial state of initialState

//3-Register listeners via subscribe
const unsubscribe = store.subscribe(() =>
  console.log("Update State", store.getState())
);

//4- update state via dispatch (action)
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
unsubscribe();
store.dispatch(orderPizza());
