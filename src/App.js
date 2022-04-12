import "./App.css";
import Login from "./public/login/Login";
import Register from "./public/register/Register";
import Dashboard from "./private/dashboard/Dashboard";
// import RequireAuth from "./private/components/RequireAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
