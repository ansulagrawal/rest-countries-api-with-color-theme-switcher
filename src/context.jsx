import { createContext, useState, useEffect, useContext } from "react";
import data from "./data.json";

const allRegions = ["All", ...new Set(data.map(country => country.region))];

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState(allRegions.map(region => ({ value: region, label: region })));
  const [selectedOption, setSelectedOption] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme => (theme === "light" ? "dark" : "light"));

  const handleSelect = item => setSelectedOption(item);

  useEffect(() => {
    setLoading(true);
    let updatedList = data.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (selectedOption && selectedOption.value !== "All") {
      updatedList = updatedList.filter(country => country.region === selectedOption.value);
    }
    setCountries(updatedList);
    setLoading(false);
  }, [selectedOption, searchTerm]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        loading,
        countries,
        setSearchTerm,
        options,
        selectedOption,
        handleSelect,
        theme,
        toggleTheme,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
