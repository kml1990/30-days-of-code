import React from "react";
import ReactDOM from "react-dom/client";

import ButtonModule from "remote/Button";
const Button = ButtonModule.default;

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: webpack-host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button />
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
