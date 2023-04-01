import React from "react";
import { Link } from "react-router-dom";

const Country = ({ flag, name, population, region, capital }) => {
  return (
    <Link to={`/${name}`}>
      <article className="country-card">
        <img className="country-card__img" src={flag} alt="Flag image" />
        <footer className="description">
          <h3>{name}</h3>
          <p>
            <span className="strong">Population: </span>
            {`${population.toLocaleString("en-US")}`}
          </p>
          <p>
            <span className="strong">Region: </span> {region}
          </p>
          <p>
            <span className="strong">Capital: </span> {capital}
          </p>
        </footer>
      </article>
    </Link>
  );
};

export default Country;
