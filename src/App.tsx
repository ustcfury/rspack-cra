import React from "react";
import logo from "./logo.svg?url";
import "./App.css";
import Demo from "./demo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Demo />
        </a>
      </header>
    </div>
  );
}

export default App;
