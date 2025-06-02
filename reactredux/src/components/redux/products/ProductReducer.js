import { Fetch_Error, Fetch_Request, Fetch_Success } from "./ProductType";

const initialState = {
  loading: false,
  products: [],
  error: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_Request:
      return {
        ...state,
        loading: true,
      };
    case Fetch_Success:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case Fetch_Error:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
