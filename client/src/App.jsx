import { useState } from "react";

import "./App.css";
import SideNavbar from "./components/SideNavbar";
import Main from "./components/Main";
import TopNavbar from "./components/TopNavbar";
function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <TopNavbar />
      <div className="flex">
        <SideNavbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
