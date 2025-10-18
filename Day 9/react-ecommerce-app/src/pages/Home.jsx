import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to ShopSmart 🛒</h1>
      <p className="lead">Discover amazing products at unbeatable prices.</p>
      <Link to="/products" className="btn btn-success">Start Shopping</Link>
    </div>
  );
}