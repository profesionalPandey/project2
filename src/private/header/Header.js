import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="top-nav">
        <a className="active" href="#home">
          Ecommerce
        </a>
        {/* <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a> */}
      </div>
    </>
  );
};

export default Header;
