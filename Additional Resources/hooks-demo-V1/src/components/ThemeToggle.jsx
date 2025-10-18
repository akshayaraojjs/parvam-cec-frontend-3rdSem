import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`card ${isDarkMode ? 'bg-dark text-white' : ''}`}>
      <div className="card-body text-center">
        <h4>Current Theme: {isDarkMode ? 'Dark' : 'Light'}</h4>
        <button 
          className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
          onClick={toggleTheme}
        >
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}

export default ThemeToggle;