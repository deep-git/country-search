import React, {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, useLocation, Link} from "react-router-dom";
import "./Card.css";

export default function Card({flagImg, name, population, region, capital}) {

  const themeMode = localStorage.getItem("mode");

  return (
    <div className="card_container" data-item={themeMode}>
        <div className="flag_container">
          <img className="flag_img" src={flagImg} alt={`${name} flag`}/>
        </div>
        <div className="info_container">
          <Link to={`/country-search/view/${name}`}>
            <h2>{name}</h2>
          </Link>
          <p><span>Population:</span> {population.toLocaleString()}</p>
          <p><span>Region:</span> {region}</p>
          <p><span>Capital:</span> {capital}</p>
        </div>
    </div>
  )
}