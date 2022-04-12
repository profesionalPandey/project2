import "./App.css";
import Login from "./public/login/Login";
import Register from "./public/register/Register";
import Dashboard from "./private/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./private/productList/ProductList";
import ProductDetail from "./private/productDetail/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="list" element={<ProductList />} />
          <Route path=":productID" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
