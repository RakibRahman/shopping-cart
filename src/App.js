import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./Cart.js";
import SearchProduct from "./SearchProduct.js";
import Payment from "./Payment.js";
import Product from "./Product";
import BottomInfo from "./BottomInfo.js";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));

    const total = [...cart].reduce((a, b) => a + b.price, 0);

    setPrice(total);
  }, [cart]);

  const deleteItem = (id) => {
    console.log(id);
    const updatedCart = [...cart].filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  const searchProduct = () =>
    products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className="App">
      <div className="leftBlock">
        <div className="search">
          <SearchProduct search={search} setSearch={setSearch} />
        </div>

        <Product
          cart={cart}
          product={products}
          searchProduct={searchProduct}
          setCart={setCart}
        />

        {/* bottom */}
        <BottomInfo />
      </div>

      {/* cart */}
      <div className="rightBlock">
        <Cart cart={cart} deleteItem={deleteItem} />
        <Payment price={price} />
      </div>
    </div>
  );
}

export default App;
