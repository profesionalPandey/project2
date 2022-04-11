import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "../productComponent/ProductComponent";
import { setProduct } from "../redux/actions/productActions";

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err, "from catch");
      });
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products:", products);
  return (
    <div className="card">
      <ProductComponent />
    </div>
  );
};

export default ProductList;
