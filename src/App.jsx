import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import CartModal from "./Components/CartModel";
import "./styles/App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} openCart={() => setShowCart(true)} />
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {showCart && (
        <CartModal cart={cart} closeCart={() => setShowCart(false)} removeFromCart={removeFromCart} />
      )}
    </>
  );
}

export default App;
