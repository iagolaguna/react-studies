import React, { useState } from "react";
import { ChangeEvent } from "react";
export const Aula4 = () => {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState<any[]>([]);

  const handleChangeCountry = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event, event.currentTarget, event.currentTarget.value);
    setCountryName(event.currentTarget.value);
  };

  const handleClick = () => {
    console.log(`get country: ${countryName}`);
    getCountries(countryName);
  };

  const getCountries = async (name: string) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`,
        {
          method: "GET",
        }
      );
      const countries = await response.json();
      if (countries) {
        setCountries(countries);
      }
      console.log("Agora vai,foi");
    } catch (err) {
      console.log("Sorte con isto!");
    } finally {
      console.log("acabou");
    }
  };

  return (
    <div>
      <input
        placeholder="Search country"
        value={countryName}
        onChange={handleChangeCountry}
      />
      <button type="button" onClick={handleClick}>
        Search
      </button>
      {countries.map((country) => (
        <div key={country.name.common} style={{ border: "1px solid black" }}>
          <p>Nome: {country.name.common}</p>
          <p>Capital: {country.capital[0]}</p>
          <p>Região: {country.region}</p>
          <p>Sub-Região: {country.subregion}</p>
        </div>
      ))}
    </div>
  );
};
