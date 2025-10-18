import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function SettingsComponent() {
  const [username, setUsername] = useLocalStorage('username', '');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div className="card">
      <div className="card-body">
        <h4>Settings (Saved in LocalStorage)</h4>
        
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Theme:</label>
          <select 
            className="form-select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        <div className="alert alert-info">
          <strong>Current Settings:</strong><br />
          Username: {username || 'Not set'}<br />
          Theme: {theme}
        </div>
      </div>
    </div>
  );
}

export default SettingsComponent;