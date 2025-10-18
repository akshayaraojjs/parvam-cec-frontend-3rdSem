import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="text-center my-4">
      <h4>useEffect Example</h4>
      <p>Timer: {seconds}s</p>
    </div>
  );
}

export default Timer;