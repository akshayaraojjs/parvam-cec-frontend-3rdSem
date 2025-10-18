export default function CartModal({ cart, onCheckout, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Your Cart</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="list-group mb-3">
                {cart.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between">
                    {item.name} (x{item.qty})
                    <span>₹{item.price * item.qty}</span>
                  </li>
                ))}
              </ul>
            )}
            <h5 className="text-end">Total: ₹{total}</h5>
          </div>
          <div className="modal-footer">
            <button className="btn btn-success" onClick={onCheckout}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}