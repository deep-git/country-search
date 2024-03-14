import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import MaxWidthWrapper from '../MaxWidthWrapper';

export default function Navbar({switchTheme, mode}) {
    
  return (
    <nav className="navbar-1">
        <MaxWidthWrapper>
            <div className="navbar_inner">
                <Link to="/country-search/">
                    <h1>Where in the world?</h1>
                </Link>
                <button className="mode_switch" onClick={switchTheme}>
                    {mode === "light" ? (
                        <div>
                            <ion-icon name="moon-outline"></ion-icon>
                            <p>Dark Mode</p>
                        </div>
                    ) : (
                        <div>
                            <ion-icon name="sunny-outline"></ion-icon>
                            <p>Light Mode</p>
                        </div>
                    )}
                </button>
            </div>
        </MaxWidthWrapper>
    </nav>
  )
}
