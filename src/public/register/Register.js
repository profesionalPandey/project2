import "./Register.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  // for input
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value, "testingInput");
    setUser({ ...user, [name]: value });
  };
  // for submit
  const [records, setRecords] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecords = { ...user, id: new Date().getTime().toString() }; //   feeder
    setRecords([...records, newRecords]); //pushing
    console.log(records);
    setUser({
      username: "",
      email: "",
      mobile: "",
      password: "",
    }); //empty input
  };
  return (
    <>
      <h2 className="for-center">Register</h2>
      <form onSubmit={handleSubmit} className="container">
        <div>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            value={user.username}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            autoComplete="off"
            value={user.mobile}
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
            value={user.password}
            onChange={handleInput}
          />
        </div>
        <Link to="/dashboard">in</Link>
        <button type="submit">Registration</button>
      </form>
      <div className="for-center">
        {records.map((display) => {
          const { username, email, mobile, password, id } = display;
          return (
            <div className="" key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{mobile}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Register;
