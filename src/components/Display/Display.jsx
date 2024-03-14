import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Display.css";
import Card from "../Card/Card";
import MaxWidthWrapper from '../MaxWidthWrapper';

export default function Display({results}) {

  const [searchCountry, setSearchCountry] = useState("");
  const [regionSelect, setRegionSelect] = useState("");
  const [regionCountries, setRegionCountries] = useState();

  function handleSearchCountryChange(countryName) {
    setSearchCountry(countryName);
  }

  function onSelectedIndexChange(e) {
    setRegionSelect(e.target.value);
  }

  useEffect(() => {
    let regionFilter = results.filter((country) => {
      return country.region === regionSelect;
    });

    setRegionCountries(regionFilter);
  }, [regionSelect]);

  return (
    <MaxWidthWrapper>
    <div>
        <div className="search_options">
          <div>
          <form className="search_container">
                {searchCountry ? (
                    <Link to={`/country-search/search/${searchCountry}`}>
                        <button className="search_submit"><ion-icon name="search-outline"></ion-icon></button>
                    </Link>
                ) : (
                    <button className="search_submit"><ion-icon name="search-outline"></ion-icon></button>
                )}
                <input id="search_country" value={searchCountry} onChange={(e) => handleSearchCountryChange(e.target.value)} type="text" placeholder="Search for a country" required/>
            </form>
            <div className="region_container">
                <select name="region" id="region" onChange={(e) => onSelectedIndexChange(e)}>
                    <option value="">Select region</option>
                    <option value="Americas">Americas</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
          </div>
        </div>

        <div className="display_view">

            {results && regionSelect === "" 
            ? results.slice(0, 16).map(country => (
              <div className="country_card" key={country.area}>
                <Card
                country={country}
                flagImg={country.flags["png"]} 
                name={country.name.common} 
                population={country.population} 
                region={country.region} 
                capital={country.capital}/>
              </div>
            ))
            : regionCountries.map(country => (
              <div className="country_card" key={country.area}>
                <Card
                country={country}
                flagImg={country.flags["png"]} 
                name={country.name.common} 
                population={country.population} 
                region={country.region} 
                capital={country.capital}/>
              </div>
            ))
            }

            {results && results.length < 1 && (
              <h2 className="search_found">Search result not found!</h2>
            )}
            </div>
    </div>
    </MaxWidthWrapper>
  )
}
