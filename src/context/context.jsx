import React, { useState, createContext, useEffect } from "react";

const context = createContext();

const DEFAULT_TITLE = "Filter by Region";

export function ContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme") === "true") {
      document.documentElement.classList.add("dark");
      return true;
    }
    return false;
  });
  const [toggleList, setToggleList] = useState(false);
  const [dropdownMenuTitle, setDropdownMenuTitle] = useState(DEFAULT_TITLE);

  function darkModeHandler() {
    setTheme(prevTheme => {
      localStorage.setItem("theme", !prevTheme);
      return !prevTheme;
    });
    document.documentElement.classList.toggle("dark");
  }

  function changeTitle(region) {
    setDropdownMenuTitle(region[0].toUpperCase() + region.slice(1));
    toggleMenuHandler();
  }

  function defaultTitle() {
    setDropdownMenuTitle(DEFAULT_TITLE);
  }

  function toggleMenuHandler() {
    setToggleList(prevToggleList => !prevToggleList);
  }
  const data = { theme, darkModeHandler, dropdownMenuTitle, changeTitle, defaultTitle, toggleList, toggleMenuHandler };

  return <context.Provider value={data}>{children}</context.Provider>;
}

export default context;
