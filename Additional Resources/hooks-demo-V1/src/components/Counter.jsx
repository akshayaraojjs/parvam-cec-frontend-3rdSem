import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <div className="card-body text-center">
        <h3>Counter: {count}</h3>
        <div className="btn-group mt-3">
          <button 
            className="btn btn-danger"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button 
            className="btn btn-success"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;