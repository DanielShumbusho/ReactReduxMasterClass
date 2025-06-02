import { Fetch_Error, Fetch_Request, Fetch_Success } from "./ProductType";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type: Fetch_Request,
  };
};

export const fetchSuccess = (products) => {
  return {
    type: Fetch_Success,
    payload: products,
  };
};

export const fetchError = (error) => {
  return {
    type: Fetch_Error,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        const products = res.data.map((product) => product.title);
        dispatch(fetchSuccess(products));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchError(errorMsg));
        console.log(err);
      });
  };
};
