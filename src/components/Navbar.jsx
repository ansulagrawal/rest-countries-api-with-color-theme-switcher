import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Moon } from "../assets";
import context from "../context/context";

export default function Navbar() {
  const { theme, darkModeHandler, defaultTitle } = useContext(context);
  return (
    <nav className="text-color bg-color-component shadow ease-in-out duration-300">
      <div className="max-w-[1440px] mx-auto padding-x py-[40px] w-full flex justify-between items-center md:py-[30px] ">
        <Link to="/">
          <h1 className="text[17px] font-extraBold cursor-pointer md:text-[32px] " onClick={defaultTitle}>
            Where in the world?
          </h1>
        </Link>
        <button className="flex items-center gap-[10px]" onClick={darkModeHandler}>
          <Moon dark={theme} className="w-[20px] h-[20px]" />
          <span className="text-[14px] md:text-[17px]">Dark Mode</span>
        </button>
      </div>
    </nav>
  );
}
