import React, { useEffect, useState } from 'react';

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="50" />
            {country.name.common} - {country.capital}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
