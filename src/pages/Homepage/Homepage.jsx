import React, {useState, useEffect} from 'react';
import "./Homepage.css";
import Display from "../../components/Display/Display";
import Footer from "../../components/Footer/Footer";


export default function Homepage() {
    let API_ENDPOINT = "https://restcountries.com/v3.1/independent?status=true";
    const [results, setResults] = useState([]);

    useEffect(() => {
        try {
            fetch(API_ENDPOINT).then(res => res.json()).then(data => {
                if (!data.errors) {
                    setResults(data);
                    console.log(data);
                } else {
                    setResults([]);
                }
            });
        } catch(error) {
            console.log(error);
        }
    }, []);

  return (
    <div>
        <Display results={results}/>
        <Footer/>
    </div>
  )
}
