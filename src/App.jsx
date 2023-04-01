import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import SingleCountry from "./pages/SingleCountry.jsx";
import { useGlobalContext } from "./context";
import "./index.css";

function App() {
  const { theme } = useGlobalContext();
  return (
    <div id={theme} className="app">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<SingleCountry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
