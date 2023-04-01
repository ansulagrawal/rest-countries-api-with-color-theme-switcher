import React from "react";
import ReactSwitch from "react-switch";
import { useGlobalContext } from "../context";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useGlobalContext();
  return (
    <div className="header">
      <nav className="navbar container">
        <div>
          <h1 className="navbar-title">Where in the world?</h1>
        </div>
        <div className="switch">
          <label>{theme === "light" ? <FaSun /> : <FaMoon />}</label>
          <ReactSwitch
            onColor="#858585"
            className="toggle-btn"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
