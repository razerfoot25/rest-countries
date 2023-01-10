import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Search = ({ onSearchByName, onSearchByRegion }) => {
  const [searchByName, setSearchByName] = useState("");
  const location = useLocation();
  const onSubmit = (e) => {
    e.preventDefault();
    onSearchByName(searchByName);
  };

  return (
    <>
      {location.pathname === "/" && (
        <form className="search" onSubmit={(e) => onSubmit(e)}>
          <div className="search__div--input">
            <BiSearch />
            <label htmlFor="search-bar" className="sr-only">
              search bar
            </label>
            <input
              type="text"
              name="search-bar"
              id="search-bar"
              className="jopay"
              placeholder="Search for a country"
              value={searchByName}
              onChange={(e) => setSearchByName(e.target.value)}
            />
          </div>
          <div className="search__div--select">
            <label htmlFor="filter" className="sr-only">
              filter by region
            </label>
            <select
              name="filter"
              id="filter"
              onChange={(e) => onSearchByRegion(e.target.value)}
            >
              <option value="">Filter by Region</option>
              <option value="asia">Asia</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
            <span className="svg--arrow_down">
              <MdOutlineKeyboardArrowDown />
            </span>
          </div>
        </form>
      )}
    </>
  );
};

export default Search;
