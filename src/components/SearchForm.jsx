import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import Select from "react-select";

const SearchForm = () => {
  const { searchTerm, setSearchTerm, options, selectedOption, handleSelect, theme } = useGlobalContext();

  const searchValue = useRef("");

  useEffect(() => searchValue.current.focus(), []);

  const searchCountries = () => setSearchTerm(searchValue.current?.value);

  const handleSubmit = e => e.preventDefault();

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <input
            aria-label="Search"
            className="search-input"
            type="text"
            id="name"
            placeholder=" &#xF002;    Search for a country..."
            ref={searchValue}
            value={searchTerm}
            onChange={searchCountries}
            autoComplete="off"
          />
        </div>
      </form>
      <div className="search-select">
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: theme === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
              backgroundColor: theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
            }),
            placeholder: provided => ({
              ...provided,
              color: theme === "dark" ? "hsl(0, 0%, 98%)" : "hsl(0, 0%, 52%)",
            }),
            singleValue: provided => ({
              ...provided,
              color: theme === "dark" ? "hsl(0, 0%, 98%)" : "hsl(0, 0%, 52%)",
            }),
          }}
          options={options}
          placeholder="Filter By Region"
          value={selectedOption}
          onChange={handleSelect}
          isSearchable={true}
        />
      </div>
    </section>
  );
};

export default SearchForm;
