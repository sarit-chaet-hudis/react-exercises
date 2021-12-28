import { useState, useEffect, useRef } from "react";
import CountriesHooks from "./New Avatar/CountriesHooks";

const Cancel = () => {
  const [showCountries, toggleCountries] = useState(true);

  const Controller = useRef("");

  useEffect(() => {
    const controller = new AbortController();
    Controller.current = controller;
  }, []);

  useEffect(() => {
    if (!showCountries) {
      console.log("stop request..");
      Controller.current.abort();
    }
  }, [showCountries]);

  const toggleFunction = () => {
    toggleCountries(!showCountries);
  };

  return (
    <>
      <button onClick={() => toggleFunction()}>Show/Hide Countries</button>
      {showCountries ? (
        <CountriesHooks controller={Controller.current} />
      ) : null}
    </>
  );
};

export default Cancel;
