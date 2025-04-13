import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div>
      <h1>Welcome to Iyanohbets</h1>
      <p>Login to place your bets!</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
