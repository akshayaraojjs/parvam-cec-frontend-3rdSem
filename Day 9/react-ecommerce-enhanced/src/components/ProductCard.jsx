import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="card h-100 shadow-sm">
      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        height="200px"
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.title.slice(0, 40)}...</h6>
        <p className="text-success fw-bold">${product.price}</p>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ backgroundColor: "#0d6efd", scale: 1.02 }}
          onClick={handleAdd}
          className="btn btn-primary mt-auto"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}