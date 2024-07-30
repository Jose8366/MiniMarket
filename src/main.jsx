import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { MarketApp } from "./MarketApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MarketApp />
    </BrowserRouter>
  </React.StrictMode>
);
