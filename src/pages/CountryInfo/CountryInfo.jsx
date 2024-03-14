import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate, useParams, Link} from "react-router-dom";
import "./CountryInfo.css";
import Navbar from "../../components/Navbar/Navbar";

export default function CountryInfo() {
    const [countryInfo, setCountryInfo] = useState();
    const {name} = useParams();

    let fetchInfo = () => {
        try {
            fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data => {
                if (!(data.status === 404)) {
                    let nameFiltered = data.filter((entry) => {
                        return entry.name.common === name;
                    })
                    setCountryInfo(nameFiltered);
                    console.log(nameFiltered);
                } else {
                    setCountryInfo([]);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchInfo();
    }, [name])

    const navigate = useNavigate();

  return (
        <div className="country_info_container">
            <div className="back_button_container">
                <Link to={'..'} onClick={(e) => {
                    e.preventDefault;
                    navigate(-1);
                }}>
                    <button className="back_button"><ion-icon name="arrow-back-outline"></ion-icon>Back</button>
                </Link>
            </div>
            {countryInfo !== undefined && name && (
                <div className="specific_country_container">
                <div className="specific_flag_container">
                    <img src={countryInfo[0].flags.png}></img>
                </div>
                <div className="inner_country_container">
                    <h2>{countryInfo[0].name.common}</h2>
                    <div className="specific_country_info">
                        <div>
                            <p><span>Native Name:</span> {countryInfo[0].name.nativeName[Object.keys(countryInfo[0].name.nativeName)[0]].official}</p>
                            <p><span>Population:</span> {countryInfo[0].population.toLocaleString()}</p>
                            <p><span>Region:</span> {countryInfo[0].region}</p>
                            <p><span>Sub Region:</span> {countryInfo[0].subregion}</p>
                            <p><span>Capital:</span> {countryInfo[0].capital}</p>
                        </div>
                        <div>
                            <p><span>Top Level Domain:</span> {countryInfo[0].tld[0]}</p>
                            <p><span>Currencies:</span> {countryInfo[0].currencies[Object.keys(countryInfo[0].currencies)[0]].name}</p>
                            <div className="languages_container"><span className="language_tag">Languages:</span> {
                                Object.keys(countryInfo[0].languages).map((keyName, i) => (
                                    <p key={i} className="specific_language">{countryInfo[0].languages[keyName]}</p>
                                ))
                            }</div>
                        </div>
                    </div>
                    <div>
                        {countryInfo[0].borders && (
                            <div className="border_container"><span>Border Countries:</span> {
                                Object.keys(countryInfo[0].borders).map((keyName, i) => (
                                    <p key={i}>{countryInfo[0].borders[keyName]}</p>
                                ))
                            } </div>
                        )}
                    </div>
                </div>
            </div>
            )}
        </div>
  )
}
