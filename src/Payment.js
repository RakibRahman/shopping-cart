import React from "react";

const Payment = ({ price }) => {
  return (
    <div className="payment">
      <p>
        <span>Discount</span>
        <span>BDT 0.00</span>
      </p>
      <p>
        <span>Subtotal</span>
        <span>BDT {price.toFixed(2)}</span>
      </p>
      <p>
        <span>Tax(0%)</span>
        <span>BDT 0</span>
      </p>
      <p>
        <span>Total</span>
        <span>BDT {price.toFixed(2)}</span>
      </p>
      <button>
        <span>Pay </span>
        <span>BDT {price.toFixed(2)}</span>
      </button>
    </div>
  );
};

export default Payment;
