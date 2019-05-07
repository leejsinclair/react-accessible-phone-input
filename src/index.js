import React from "react";
import ReactDOM from "react-dom";
import PhoneInput from "./phoneInput";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Test page for phone input</h1>
      <PhoneInput />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
