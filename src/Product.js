import React from "react";

const Product = ({ products, onClick }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product" key={product.id} onClick={onClick}>
          <img src={product.image} alt="product " />
          <p>{`${product.title.substr(0, 12)}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
