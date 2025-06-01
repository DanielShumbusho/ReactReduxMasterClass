// console.log("welcome to redux");

const Order_Pizza = "Order_Pizza";
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

//Reducer
const initialState = {
  pizzaBase: 100,
  //   toppings: ["cheese", "capsicum"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Order_Pizza:
      return {
        ...state, //for when an object has a lot of keys we copy the whole object
        pizzaBase: pizzaBase - 1, //and then only update what we need
      };
    default:
      return state;
  }
};
