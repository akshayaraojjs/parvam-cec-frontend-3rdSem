import React from "react";
import FocusInput from "../components/FocusInput";
import Stopwatch from "../components/Stopwatch";
import PreviousValue from "../components/PreviousValue";

function About() {
  return (
    <div className="container mt-4">
      <h2>About Hooks</h2>
      <p>Here we demonstrate the useRef hook in action.</p>
      <FocusInput />
      <Stopwatch />
      <PreviousValue />
    </div>
  );
}

export default About;