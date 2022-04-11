import "./ProductComponent.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, image, title, price, category } = product;
    return (
      <div key={id}>
        <Link
          to={"/product/${id}"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card">
            <div className="image">
              <img scr={image} alt={title} />
            </div>
            <div className="content">
              <div className="lead">{title}</div>
              <div className="">${price}</div>
              <div className="base">{category}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
