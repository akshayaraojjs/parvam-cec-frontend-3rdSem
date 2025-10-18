import { useState } from "react";

function FormInput() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name || "Guest"}!`);
    setName("");
  };

  return (
    <div className="my-4">
      <h4>useState Example - Form Input</h4>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormInput;