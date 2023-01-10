import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/style.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import Main from "./components/Main";
import Country from "./components/Country";
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };

    getCountries();
  }, []);

  const fetchCountries = async () => {
    const res = await fetch("https://restcountries.com/v2/all");
    const data = res.json();
    return data;
  };
  const fetchCountryByName = async (name) => {
    const res = await fetch(`https://restcountries.com/v2/name/${name}`);
    const data = res.json();
    return data;
  };
  const fetchCountryByRegion = async (region) => {
    const res = await fetch(`https://restcountries.com/v2/region/${region}`);
    const data = res.json();
    return data;
  };

  const changeTheme = () => {
    document.body.classList.toggle("theme-dark");
  };

  const getSearchByName = async (name) => {
    if (!name) {
      const data = await fetchCountries();
      setCountries(data);
    } else {
      const country = await fetchCountryByName(name);
      if (country.status == 404) {
        return;
      }
      setCountries(country);
    }
  };

  const getSearchByRegion = async (region) => {
    const data = await fetchCountryByRegion(region);
    setCountries(data);
  };

  const getCounty = async (name) => {
    const data = await fetchCountryByName(name);
    setCountry(data);
  };

  return (
    <BrowserRouter>
      <Header onChange={changeTheme} />
      <main className="grid-container">
        <Search
          onSearchByName={getSearchByName}
          onSearchByRegion={getSearchByRegion}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div className="countries grid-col-4">
                {countries.map((country, index) => (
                  <Main
                    key={index}
                    countryInfo={country}
                    onGetCountry={getCounty}
                  />
                ))}
              </div>
            }
          />

          <Route path="/country" element={<Country CountryInfo={country} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
