import React from 'react';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import WindowSizeTracker from './components/WindowSizeTracker';
import TodoList from './components/TodoList';
import SettingsComponent from './components/SettingsComponent';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function HooksDemo() {
  return (
    <ThemeProvider>
      <div className="container mt-4">
        <h1 className="text-center mb-4">React Hooks Examples</h1>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>useState Examples</h3>
            <Counter />
            <div className="mt-3">
              <LoginForm />
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <h3>useEffect Examples</h3>
            <UserProfile />
            <div className="mt-3">
              <WindowSizeTracker />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>useContext Example</h3>
            <ThemeToggle />
          </div>
          
          <div className="col-md-6 mb-4">
            <h3>useReducer Example</h3>
            <TodoList />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>Custom Hook Example</h3>
            <SettingsComponent />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default HooksDemo;