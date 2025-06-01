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
