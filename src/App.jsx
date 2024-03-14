import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage/Homepage";
import CountryInfo from "./pages/CountryInfo/CountryInfo";
import Search from "./pages/Search/Search";
import useLocalStorage from "use-local-storage";
import Navbar from "./components/Navbar/Navbar";
import MaxWidthWrapper from './components/MaxWidthWrapper';
function App() {

  const defaultLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [mode, setMode] = useLocalStorage("mode", defaultLight ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = mode === "light" ? "dark" : "light";
    setMode(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar switchTheme={switchTheme} mode={mode}/>
        <Routes>
          <Route exact path="/country-search/" element={<Homepage/>}/>
          <Route path="/country-search/view/:name" element={<CountryInfo/>}/>
          <Route path="/country-search/search/:name" element={<Search/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
