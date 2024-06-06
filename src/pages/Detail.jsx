import { useParams } from "react-router-dom";
import data from "../assets/data.json";

function Detail() {
  const { countryName } = useParams();
  const country = data.find((country) => country.name === countryName);

  if (!country) {
    return <h1>Country not found</h1>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <img src={country.flag} alt={`${country.name} flag`} />
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
}

export default Detail;
