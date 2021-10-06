import "./App.css";
import { useEffect, useState } from "react";
import Cart from "./Cart.js";
import SearchItem from "./SearchItem.js";
import Payment from "./Payment.js";
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
  const searchProduct = (products) =>
    products.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className="App">
      <div className="leftBlock">
        <div className="search">
          <SearchItem search={search} setSearch={setSearch} />
        </div>
        <div className="product-container">
          {searchProduct(products).map((product) => (
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
            <button>BTN one</button>
            <button>BTn two</button>
          </p>
        </div>
      </div>

      {/* cart */}
      <div className="rightBlock">
        <h1>Cart</h1>
        <Cart cart={cart} deleteItem={deleteItem} />
        <Payment price={price} />
      </div>
    </div>
  );
}

export default App;
