import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { setProducts, fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((store) => store);
  console.log(products);
  const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => console.log(err));
  //   dispatch(setProducts(response.data));
  // };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
