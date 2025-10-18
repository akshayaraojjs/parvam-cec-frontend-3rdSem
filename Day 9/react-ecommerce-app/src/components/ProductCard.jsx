import { useState } from "react";

export default function ProductCard({ product, onAddToCart }) {
  const [animate, setAnimate] = useState(false);

  const handleAdd = () => {
    setAnimate(true);
    onAddToCart(product);
    setTimeout(() => setAnimate(false), 500);
  };

  return (
    <div className={`card shadow-sm product-card ${animate ? "bounce" : ""}`}>
      <img src={product.img} className="card-img-top" alt={product.name} />
      <div className="card-body text-center">
        <h5>{product.name}</h5>
        <p>₹{product.price}</p>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}