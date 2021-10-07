import toast from "react-hot-toast";
const itemAdded = () => toast.success("Product added to the cart");

const Product = ({ cart, setCart, products, searchProduct }) => {
  return (
    <div className="product-container">
      {searchProduct(products).map((product) => (
        <div
          className="product"
          key={product.id}
          onClick={() => {
            setCart([...cart, product]);
            itemAdded();
          }}
        >
          <img src={product.image} alt="product " />
          <p>{`${product.title.substr(0, 6)}....`}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
