import { Fetch_Error, Fetch_Request, Fetch_Success } from "./ProductType";

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
