import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-4xl text-white m-h-screen bg-gray-800">
        <img src={logo} className="pointer-events-none h-40" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        <a
          className="text-teal-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
