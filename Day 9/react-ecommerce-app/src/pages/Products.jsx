import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Products({ onAddToCart }) {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999, img: "https://via.placeholder.com/200" },
    { id: 2, name: "Smart Watch", price: 2499, img: "https://via.placeholder.com/200" },
    { id: 3, name: "Bluetooth Speaker", price: 1499, img: "https://via.placeholder.com/200" },
    { id: 4, name: "Power Bank", price: 999, img: "https://via.placeholder.com/200" },
  ];

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Our Products</h2>
      <div className="row">
        {productList.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}