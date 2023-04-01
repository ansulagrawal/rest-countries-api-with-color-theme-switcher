import React, { useContext, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import ChevronDown from "../assets/ChevronDown";
import context from "../context/context";

export default function DropdownMenu() {
  const { dropdownMenuTitle, toggleList, toggleMenuHandler, changeTitle } = useContext(context);
  const navigate = useNavigate();

  useEffect(() => {
    const region = new URLSearchParams(window.location.search).get("region");
    if (region) changeTitle(region);
  }, []);

  const handleButtonClick = e => {
    const targetButton = e.target.closest("button");
    if (targetButton) {
      navigate(`?region=${targetButton.value}`);
      changeTitle(targetButton.value);
    }
  };

  return (
    <div className="relative w-[245px]">
      <div
        className="flex justify-between items-center shadow rounded-md text-color bg-color-component cursor-pointer px-[25px] py-5 md:px-[30] transition duration-300 ease-in-out"
        onClick={toggleMenuHandler}>
        <h4>{dropdownMenuTitle}</h4>
        <ChevronDown className="w-[20px] h-[20px]" />
      </div>
      {toggleList && (
        <Form
          className="flex flex-col gap-[15px] px-[25px] py-5 md:px-[30px] text-color bg-color-component shadow rounded-md absolute top-[70px] left-0 right-0 transition duration-300 ease-in-out"
          role="dropdown menu"
          onClick={handleButtonClick}>
          <button name="region" type="submit" value="africa" className="w-full text-left hover:font-semibold ease-in-out duration-200">
            Africa
          </button>
          <button name="region" type="submit" value="america" className="w-full text-left hover:font-semibold ease-in-out duration-200">
            America
          </button>
          <button name="region" type="submit" value="asia" className="w-full text-left hover:font-semibold ease-in-out duration-200">
            Asia
          </button>
          <button name="region" type="submit" value="europe" className="w-full text-left hover:font-semibold ease-in-out duration-200">
            Europe
          </button>
          <button name="region" type="submit" value="oceania" className="w-full text-left hover:font-semibold ease-in-out duration-200">
            Oceania
          </button>
          <button name="region" type="submit" value="antarctic" className="w-full text-left hover:font-semibold ease-in-out duration-200">
            Antarctic
          </button>
        </Form>
      )}
    </div>
  );
}
