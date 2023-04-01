import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SingleCountry = ({}) => {
  const { countries } = useGlobalContext();
  const { name } = useParams();

  return (
    <div className="single-page">
      <section className="country-section container">
        <Link to="/">
          <button className="btn btn-back">
            <FaLongArrowAltLeft className="arrow" /> back
          </button>
        </Link>

        {countries
          .filter((country) => country.name === name)
          .map((item, index) => {
            const {
              flag,
              name,
              nativeName,
              population,
              region,
              subregion,
              capital,
              topLevelDomain,
              currencies,
              languages,
              borders,
            } = item;
            return (
              <main key={index} className="country-container">
                <div className="img-container">
                  <img className="country-img" src={flag} alt="Flag image" />
                </div>
                <article className="country-page">
                  <h2 className="country-page__name">{name}</h2>
                  <div className="country-page__info">
                    <div>
                      <p>
                        <span className="strong">Native Name: </span>
                        {nativeName}
                      </p>
                      <p>
                        <span className="strong">Population: </span>
                        {`${population.toLocaleString("en-US")}`}
                      </p>
                      <p>
                        <span className="strong">Region: </span> {region}
                      </p>
                      <p>
                        <span className="strong">Sub Region: </span> {subregion}
                      </p>
                      <p>
                        <span className="strong">Capital: </span>
                        {capital && capital}
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="strong">Top Level Domain: </span>
                        {topLevelDomain}
                      </p>
                      <p>
                        <span className="strong">Currencies: </span>
                        {currencies && currencies[0].name}
                      </p>
                      <p>
                        <span className="strong">Languages: </span>
                        {languages.map((language) => language.name)?.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="country-border">
                    <div className="bordert-title strong">
                      Border Countries:{" "}
                    </div>
                    {borders ? (
                      <div className="btn-container">
                        {borders.map((border, index) => {
                          return (
                            <button key={index} className="btn">
                              {border}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <p>This country does not have a neighbors.</p>
                    )}
                  </div>
                </article>
              </main>
            );
          })}
      </section>
    </div>
  );
};

export default SingleCountry;
