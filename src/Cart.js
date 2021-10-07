import React from "react";

const Cart = ({ cart, deleteItem }) => {
  return (
    <div className="cart-container">
      <h3>💂‍♂️ Add Customer</h3>
      {cart.map((item) => (
        <div className="cart" key={item.id}>
          <div className="info">
            <img src={item.image} alt="product info" />
            <p>{item.title}</p>
          </div>
          <div className="price">
            <p>BDT {item.price}</p>
            <button onClick={() => deleteItem(item.id)}>⛔</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
