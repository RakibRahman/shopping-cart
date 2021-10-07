import React from "react";

const Product = ({ cart, setCart, products, searchProduct }) => {
  return (
    <div className="product-container">
      {searchProduct(products).map((product) => (
        <div
          className="product"
          key={product.id}
          onClick={() => setCart([...cart, product])}
        >
          <img src={product.image} alt="product " />
          <p>{`${product.title.substr(0, 6)}....`}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
