import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center my-4">
      <h4>useState Example</h4>
      <p>Count: {count}</p>
      <button className="btn btn-primary mx-2" onClick={() => setCount(count + 1)}>+</button>
      <button className="btn btn-danger mx-2" onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;