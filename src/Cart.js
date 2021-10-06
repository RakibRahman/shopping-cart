import React from "react";

const Cart = ({ cart, deleteItem }) => {
  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div className="cart" key={item.id}>
          <img src={item.image} alt="product info" />
          <p>{item.title}</p>
          <div className="price">
            <p>{item.price}</p>
            <button onClick={() => deleteItem(item.id)}>⛔</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
