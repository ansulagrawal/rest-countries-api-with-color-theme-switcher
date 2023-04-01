import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import MagnifyingGlass from "../assets/MagnifyingGlass";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get("name") || "";
  });

  const handleInputChange = event => setSearchValue(event.target.value);

  return (
    <div className="w-full flex items-center gap-8 px-10 py-5 text-color bg-color-component shadow rounded-md sm:w-[480px] sm:gap-6 md:px-8 ease-in-out duration-300">
      <MagnifyingGlass className="w-[25px] h-[25px]" />
      <Form autoComplete="off" className="w-full" id="form-id" role="search">
        <input className="w-full bg-transparent focus:outline-none" placeholder="Search for a country..." value={searchValue} name="name" onChange={handleInputChange} />
      </Form>
    </div>
  );
}
