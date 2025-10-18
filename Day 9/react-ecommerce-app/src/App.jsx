import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CartModal from "./components/CartModal";
import ToastAlert from "./components/ToastAlert";

function App() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [showCart, setShowCart] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing)
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      return [...prev, { ...product, qty: 1 }];
    });

    // Show toast
    setToastMsg(`${product.name} added to cart ✅`);
    setShowToast(true);
  };

  const handleCheckout = () => {
    alert("Order placed successfully!");
    setCart([]);
    localStorage.removeItem("cart");
    setShowCart(false);
  };

  return (
    <Router>
      <Navbar
        cartCount={cart.reduce((sum, i) => sum + i.qty, 0)}
        onCartClick={() => setShowCart(true)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products onAddToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {showCart && (
        <CartModal
          cart={cart}
          onCheckout={handleCheckout}
          onClose={() => setShowCart(false)}
        />
      )}

      {/* Toast Notification */}
      <ToastAlert
        show={showToast}
        message={toastMsg}
        onClose={() => setShowToast(false)}
      />
    </Router>
  );
}

export default App;