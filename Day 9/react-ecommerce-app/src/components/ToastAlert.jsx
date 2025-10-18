import { useEffect } from "react";

export default function ToastAlert({ show, message, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 1500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 1055 }}
    >
      <div
        className={`toast align-items-center text-white bg-success border-0 ${show ? "show" : "hide"}`}
        role="alert"
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}