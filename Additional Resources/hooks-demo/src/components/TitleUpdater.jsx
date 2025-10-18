import { useState, useEffect } from "react";

function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div className="my-4 text-center">
      <h4>useEffect Example - Update Page Title</h4>
      <p>Click count: {count}</p>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default TitleUpdater;