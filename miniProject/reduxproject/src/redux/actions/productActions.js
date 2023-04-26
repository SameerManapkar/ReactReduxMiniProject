import axios from "axios";
import shoppingMallApi from "../../api/shoppingMallApi";

import { ActionTypes } from "../constants/actionTypes";

export const fetchProducts = () => {
  return async function (dispatch) {
    const response = await shoppingMallApi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const fetchProduct = (id) => {
  return async function (dispatch) {
    const response = await shoppingMallApi.get(`/products/${id}`);
    console.log(response);
    dispatch({ type: ActionTypes.FETCH_PRODUCT, payload: response.data });
  };
};

export const setProducts = (payload) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload,
  };
};

export const selectedProduct = (payload) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
