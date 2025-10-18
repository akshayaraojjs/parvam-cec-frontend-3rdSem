import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react"; // Optional icon (Bootstrap alternative available)

export default function Navbar() {
  const { cart } = useCart();
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">E-Shop</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/products" ? "active" : ""}`} to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
            </li>

            {/* 🛒 Cart Icon with Animation */}
            <li className="nav-item position-relative ms-3">
              <Link className="nav-link d-flex align-items-center" to="/checkout">
                <ShoppingCart size={20} />
                <AnimatePresence>
                  {cart.length > 0 && (
                    <motion.span
                      key="cart-count"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.3 }}
                      className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
                    >
                      {cart.length}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}