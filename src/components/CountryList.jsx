import React from "react";
import Country from "./Country";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CountryList = () => {
  const { loading, countries } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="container">
      <div className="country-list">
        {countries.map(country => (
          <Country key={country.alpha3Code} {...country} />
        ))}
      </div>
    </section>
  );
};

export default CountryList;
