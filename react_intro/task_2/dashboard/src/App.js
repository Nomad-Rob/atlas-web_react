import React from 'react';
import './App.css';
import logo from './holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
      </main>
      <footer className="App-footer">
        <p>Copyright 2024 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
