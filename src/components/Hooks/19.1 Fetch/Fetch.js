import axios from "axios";
import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const Search = async () => {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setResult(data);
      console.log(data);
    };
    Search();
  }, []);

  return (
    <>
      <div>Fetch</div>
    </>
  );
};

export default Fetch;
