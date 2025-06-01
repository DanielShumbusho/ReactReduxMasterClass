const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
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
  };
}

function orderBurger() {
  return {
    type: Order_Burger,
  };
}

//Reducer
const initialStateForPizza = {
  pizzaBase: 100,
  //   toppings: ["cheese", "capsicum"],
};

const initialStateForBurger = {
  burgerBuns: 200,
  //   toppings: ["cheese", "capsicum"],
};

const reducerPizza = (state = initialStateForPizza, action) => {
  switch (action.type) {
    case Order_Pizza:
      return {
        ...state, //for when an object has a lot of keys we copy the whole object
        pizzaBase: state.pizzaBase - 1, //and then only update what we need
      };
    default:
      return state;
  }
};

const reducerBurger = (state = initialStateForBurger, action) => {
  switch (action.type) {
    case Order_Burger:
      return {
        ...state,
        burgerBuns: state.burgerBuns - 1,
      };
    default:
      return state;
  }
};
//combine reducers before using
const rootReducer = combineReducer({
  pizza: reducerPizza,
  burger: reducerBurger,
});
//Store
//1- Store needs to hold the application states

const store = createStore(rootReducer, applyMiddleware(logger)); //because the reducer has the state and action

//2-Exposes the getState method which gives accesss to th ecurrent state in the store
console.log("Initial State:", store.getState()); //will print the initial state of initialState

//3-Register listeners via subscribe
const unsubscribe = store.subscribe(() => {});

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
