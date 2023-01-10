import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Country = ({ CountryInfo }) => {
  const checkBorders = () => {
    if (!CountryInfo[0].borders) {
      return "none";
    } else {
      return CountryInfo[0].borders;
    }
  };
  return (
    <div>
      <div className="back">
        <Link to="/" className="back__btn">
          <HiOutlineArrowLeft className="back__btn--svg" />
          Back
        </Link>
      </div>

      {CountryInfo.map((country, index) => (
        <div key={index} className="country grid-col-2">
          <div>
            <img
              src={country.flags.svg}
              alt={country.name}
              className="country__img"
            />
          </div>
          <div className="country__info">
            <strong>{country.name}</strong>
            <div className="country__info--other">
              <div>
                <p>
                  <span>Native Name: </span>
                  {country.nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {country.population}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div>
                <p>
                  <span>Top Level Domain: </span>
                  {country.topLevelDomain}
                </p>
                <div>
                  <span>Currencies: </span>
                  <ul role="list">
                    {country.currencies.map((currency, index) => (
                      <li key={index}>{currency.name} </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span>Languages: </span>
                  <ul role="list">
                    {country.languages.map((languange, index) => (
                      <li key={index}>{languange.name} </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="country__info--border">
              <span>Border Countries: </span>
              <ul role="list">
                {!country.borders
                  ? "none"
                  : country.borders.map((border) => <li>{border}</li>)}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
