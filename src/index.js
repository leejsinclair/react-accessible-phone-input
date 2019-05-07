import React from "react";
import ReactDOM from "react-dom";
import PhoneInput from "./phoneInput";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PhoneInput />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
