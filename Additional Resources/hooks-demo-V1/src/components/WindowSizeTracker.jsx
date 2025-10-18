import React, { useState, useEffect } from 'react';

function WindowSizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h4>Window Size</h4>
        <p>Width: <span className="badge bg-primary">{windowSize.width}px</span></p>
        <p>Height: <span className="badge bg-primary">{windowSize.height}px</span></p>
        <div className="progress mt-3">
          <div 
            className="progress-bar" 
            style={{width: `${(windowSize.width / 1920) * 100}%`}}
          >
            {Math.round((windowSize.width / 1920) * 100)}%
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindowSizeTracker;