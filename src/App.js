/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./Cart.js";
import SearchProduct from "./SearchProduct.js";
import Payment from "./Payment.js";
import Product from "./Product";
import BottomInfo from "./BottomInfo.js";
import { Toaster } from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      });
  }, []);

  const deleteItem = (id) => {
    const updatedCart = [...cart].filter((item) => item.id !== id);
    setCart(updatedCart);
  };
  const searchProduct = () =>
    products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className="App">
      <Toaster />
      <div className="leftBlock">
        <div className="search">
          <SearchProduct search={search} setSearch={setSearch} />
        </div>
        {loading && <div className="lds-hourglass"></div>}

        {!loading && (
          <Product
            cart={cart}
            product={products}
            searchProduct={searchProduct}
            setCart={setCart}
          />
        )}

        {/* bottom */}
        <BottomInfo />
      </div>

      <div className="rightBlock">
        <Cart cart={cart} deleteItem={deleteItem} setPrice={setPrice} />
        <Payment price={price} />
      </div>
    </div>
  );
}

export default App;
