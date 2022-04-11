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
        <Route path="/*" element={<ProductList />} />
        <Route path="/product/:productID" element={<ProductDetail />} />
        <Route>404 NOT Found</Route>
        <Route path="/dashboard/*"></Route>
      </Routes>
    </>
  );
};

export default Dashboard;
