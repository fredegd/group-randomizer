import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App.jsx";
import "./index.css";
import AppStateProvider from "./context/AppStateContext.jsx";

const APP = (
  <BrowserRouter>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("root")).render(APP);
