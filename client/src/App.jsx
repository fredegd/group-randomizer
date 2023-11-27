import { useState } from "react";
import { AppStateProvider } from "./context/AppStateContext";

import "./App.css";
import SideNavbar from "./components/SideNavbar";
import Main from "./components/Main";
function App() {
  return (
    <AppStateProvider>
      <div className="flex">
        <SideNavbar />
        <Main />
      </div>
    </AppStateProvider>
  );
}

export default App;
