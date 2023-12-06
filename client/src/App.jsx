import { Routes, Route } from "react-router-dom";

import "./App.css";

import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import TopNavbar from "./components/TopNavbar";
function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <TopNavbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    
    </div>
  );
}

export default App;
