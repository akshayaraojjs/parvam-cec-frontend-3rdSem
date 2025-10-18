import { useEffect, useState } from 'react';

export default function Checkout() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const placeOrder = () => {
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <div>
      <h2 className="text-center mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p className="text-center">No items in cart.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between">
                <span>{item.title}</span>
                <strong>${item.price}</strong>
              </li>
            ))}
          </ul>
          <h4>Total: ${total}</h4>
          <button onClick={placeOrder} className="btn btn-success mt-3">Place Order</button>
        </>
      )}
    </div>
  );
}