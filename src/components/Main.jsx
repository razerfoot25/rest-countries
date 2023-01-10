import React from "react";
import { Link } from "react-router-dom";
import Country from "./Country";
const Main = ({ countryInfo, onGetCountry }) => {
  return (
    <div className="countries__card">
      <Link to="/country" onClick={() => onGetCountry(countryInfo.name)}>
        <img
          src={countryInfo.flags.svg}
          alt={`flag of ${countryInfo.name}`}
          className="countries__card--image"
        />
      </Link>
      <div className="countries__card--content">
        <p className="p-block-100 name">{countryInfo.name}</p>
        <p className="other">
          <span>Population: </span>
          {countryInfo.population}
        </p>
        <p className="other">
          <span>Region: </span>
          {countryInfo.region}
        </p>
        <p className="other">
          <span>Capital: </span>
          {countryInfo.capital}
        </p>
      </div>
    </div>
  );
};

export default Main;
