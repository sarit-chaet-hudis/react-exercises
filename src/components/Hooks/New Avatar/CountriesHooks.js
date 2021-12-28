import axios from "axios";
import React, { useState, useEffect } from "react";

const CountriesHooks = (props) => {
  const [countries, setResult] = useState("");
  const [term, setTerm] = useState("");

  const onChange = (e) => {
    setTerm(e.target.value);
    console.log(e.target.value);
  };

  const renderCountries = () => {
    if (countries.length > 0)
      return countries.map((country) => {
        return <div key={country.alpha3Code}>{country.name}</div>;
      });
  };

  useEffect(() => {
    const Search = async () => {
      const { data } = await axios.get("https://restcountries.com/v2/all", {
        signal: props.controller.signal,
      });

      setResult(data);
      console.log(data);
    };
    Search();
  }, []);

  return (
    <>
      <h2>Countries</h2>
      <input type="text" value={term} onChange={(e) => onChange(e)}></input>
      <div>{renderCountries()}</div>
    </>
  );
};

export default CountriesHooks;
