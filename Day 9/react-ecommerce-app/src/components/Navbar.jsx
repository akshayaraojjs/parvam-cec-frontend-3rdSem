import { Link } from "react-router-dom";

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">ShopSmart</Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
        </ul>
        <button className="btn btn-light ms-3" onClick={onCartClick}>
          🛒 Cart (<span>{cartCount}</span>)
        </button>
      </div>
    </nav>
  );
}