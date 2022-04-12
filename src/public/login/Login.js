import "./Login.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

const Login = () => {
  // const {setAuth}=useAuth();
  // data
  const [records, setRecords] = useState(null);
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  // input
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value, "testingInput");
    setInput({ ...input, [name]: value });
  };
  // login
  const [match, setMatch] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInput = { ...input, id: new Date().getTime().toString() }; //   feeder
    setMatch([...match, newInput]); //pushing
    console.log(match);
    auth();
    setInput({
      username: "",
      password: "",
    }); //empty input
  };
  // login authentication
  const auth = () => {
    if (
      records.username === match.username &&
      records.password === match.password
    )
      return console.log("login");
    <Link element={<Navigate to="/dashboard" />} />;
  };
  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRecords(data);
      });
  }, []);
  return (
    <>
      <h1 className="for-center">Login</h1>
      <form onSubmit={handleSubmit} className="container">
        <div>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            value={input.username}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={input.password}
            onChange={handleInput}
          />
        </div>
        <Link to="/dashboard">in</Link>
        <button type="submit">Login</button>
        <span className="psw">
          <Link to="/register">Register</Link>
        </span>
      </form>
    </>
  );
};

export default Login;
