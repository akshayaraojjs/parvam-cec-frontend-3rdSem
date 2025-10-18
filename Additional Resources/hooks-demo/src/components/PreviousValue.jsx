import { useState, useEffect, useRef } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="text-center my-4">
      <h4>useRef Example - Track Previous Value</h4>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default PreviousValue;