import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./common/ThemeContext.jsx";

// Wrap the App component with theme provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
