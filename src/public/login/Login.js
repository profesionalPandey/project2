import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";
// import Register from "../register/Register";
const handleSubmit = () => {};
const Login = () => {
  return (
    <>
      <h1 className="for-center">Login</h1>
      <form onSubmit={handleSubmit} className="container">
        <div>
          <label htmlFor="username">Name</label>
          <input type="text" name="username" id="username" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
          />
        </div>
        <button type="submit">Login</button>
        <span className="psw">
          <Link to="/register">Register</Link>
        </span>
      </form>
    </>
  );
};

export default Login;
