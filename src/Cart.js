import { useEffect } from "react";
import toast from "react-hot-toast";

const Cart = ({ cart, deleteItem, setPrice }) => {
  const itemDeleted = () => toast.error("Product deleted from the cart");

  useEffect(() => {
    const total = [...cart].reduce((a, b) => a + b.price, 0);

    setPrice(total);
  }, [cart, setPrice]);

  const Message = () => (cart.length >= 1 ? "" : "No Products On Cart");
  return (
    <div className="cart-container">
      <h3>💂‍♂️ Add Customer</h3>
      <h2 className="message">
        <Message />
      </h2>
      {cart.map((item) => (
        <div className="cart" key={item.id}>
          <div className="info">
            <img src={item.image} alt="product info" />
            <p>{item.title}</p>
          </div>
          <div className="price">
            <p>BDT {item.price}</p>
            <button
              onClick={() => {
                deleteItem(item.id);
                itemDeleted();
              }}
            >
              ⛔
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
