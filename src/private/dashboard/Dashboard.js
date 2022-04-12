import "./Dashboard.css";
import React from "react";
import Header from "../header/Header";
import ProductList from "../productList/ProductList";
import ProductDetail from "../productDetail/ProductDetail";
import { Routes, Route } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Header />
      <h1 className="for-center">Dashboard</h1>
      <Routes>
        <Route path="/" exact element={<ProductList />}>
          <Route path=":productID" element={<ProductDetail />} />
        </Route>
        <Route>404 NOT Found</Route>
      </Routes>
    </>
  );
};

export default Dashboard;
