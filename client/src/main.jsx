import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App.jsx";
import "./index.css";

const APP = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("root")).render(APP);
