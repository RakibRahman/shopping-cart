import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./Cart.js";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));

    const total = [...cart].reduce((a, b) => a + b.price, 0);

    setPrice(total);
  }, [cart]);
  const addToCart = () => {
    // setCart([...cart, product]);
    console.log(cart);
    console.log(cart.length);
  };
  const deleteItem = (id) => {
    console.log(id);
    const updatedCart = [...cart].filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <div className="leftBlock">
        <div className="search">
          <input type="text" placeholder="Search Products..." />
        </div>
        <div className="product-container">
          {products.map((product) => (
            <div
              className="product"
              key={product.id}
              onClick={() => setCart([...cart, product])}
            >
              <img src={product.image} alt="product " />
              <p>{`${product.title.substr(0, 12)}`}</p>
            </div>
          ))}
        </div>

        {/* bottom */}
        <div className="bottomInfo">
          <p>habiganj || register || sale</p>
          <p>
            <button onClick={addToCart}>BTN one</button>
            <button>BTn two</button>
          </p>
        </div>
      </div>

      {/* cart */}
      <div className="rightBlock">
        <h1>Cart</h1>
        <Cart cart={cart} deleteItem={deleteItem} />
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
        </div>
      </div>
    </div>
  );
}

export default App;
