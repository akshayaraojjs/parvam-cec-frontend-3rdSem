import { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div className="text-center my-4">
      <h4>useRef Example - Stopwatch</h4>
      <p>Time: {time}s</p>
      <button className="btn btn-success mx-1" onClick={startTimer}>Start</button>
      <button className="btn btn-danger mx-1" onClick={stopTimer}>Stop</button>
      <button className="btn btn-secondary mx-1" onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;