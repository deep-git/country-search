import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Display from "../../components/Display/Display";

export default function Search() {

    const [filterCountry, setFilterCountry] = useState();

    const {name} = useParams();

    useEffect(() => {
        try {
            fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(res => res.json())
            .then(data => {
                if (!(data.status === 404)) {
                    setFilterCountry(data);
                    console.log(data);
                } else {
                    setFilterCountry([]);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }, [name])
    
  return (
    <div>
        {filterCountry && (
            <Display results={filterCountry}/>
        )}
    </div>
  )
}
