import { useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`p-4 my-3 ${isDark ? "bg-dark text-white" : "bg-light text-dark"}`}>
      <h4>useState Example - Toggle Theme</h4>
      <p>Current theme: {isDark ? "Dark" : "Light"}</p>
      <button className="btn btn-primary" onClick={() => setIsDark(!isDark)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;