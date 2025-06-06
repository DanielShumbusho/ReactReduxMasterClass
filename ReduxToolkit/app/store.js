const configureStore = require("@reduxjs/toolkit").configureStore;
const pizzaReducer = require("../features/pizza/pizzaSlice");
const burgerReducer = require("../features/burger/burgerSlice");
const productReducer = require("../features/products/productSlice");
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    burger: burgerReducer,
    products: productReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), not necessary because we have thunk
});
module.exports = store;
