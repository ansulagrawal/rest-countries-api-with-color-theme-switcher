import React, { useState } from "react";
import MagnifyingGlass from "../assets/MagnifyingGlass";
import { Form } from "react-router-dom";

function Search({ text, setText, setValue }) {
  const handleChange = event => {
    event.preventDefault();
    setText(event.target.value);
    setValue({ search: event.target.value });
  };

  return (
    <div className="w-full flex items-center gap-8 px-10 py-5 text-color bg-color-component shadow rounded-md sm:w-[400px] sm:gap-6 md:px-8 ease-in-out duration-300">
      <MagnifyingGlass className="w-[25px] h-[25px]" />
      {/* <Form name="search" autoComplete="off"> */}
        <input className="w-full bg-transparent focus:outline-none" placeholder="Search for a country..." value={text} onChange={handleChange} />
      {/* </Form> */}
    </div>
  );
}

export default Search;
