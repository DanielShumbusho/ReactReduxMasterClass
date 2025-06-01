const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunk = require("redux-thunk").thunk;
const axios = require("axios");
const FetchRequest = "FetchRequest";
const FetchSuccess = "FetchSuccess";
const FetchError = "FetchError";
//State
const initialState = {
  loading: false,
  products: [],
  error: false,
};
//Action
function fetchRequest() {
  return {
    type: FetchRequest,
  };
}
function fetchSuccess(products) {
  return {
    type: FetchSuccess,
    payload: products,
  };
}
function fetchError() {
  return {
    type: FetchError,
  };
}

//Reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FetchRequest:
      return {
        ...state,
        loading: true,
      };
    case FetchSuccess:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case FetchError:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
//Thunk action creator which returns a function
//This is the actual asynchronous functioninie?
const fetchProducts = () => {
  return function (dispatch) {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        //res.data
        const products = res.data.map((product) => product.title);
        // console.log(products);
        dispatch(fetchSuccess(products));
      })
      .catch((error) => {
        dispatch(fetchError());
      });
  };
};
//creating store
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchProducts());
//now we will use asynchronous function to fetch
//on an api so that first we render without the information
//and then fetch and finally we re-render withthte fetch information
