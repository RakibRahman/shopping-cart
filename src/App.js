import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./Cart.js";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  const addToCart = () => {
    setCart([...cart, product]);
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
        <Product product={products} onClick={addToCart} />

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
      </div>
    </div>
  );
}

export default App;
