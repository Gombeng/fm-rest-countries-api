/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Heading, Paragraph } from "./FreeText";
import { formatNumberWithCommas } from "../utils";

const CountryList = ({ countries }) => {
  console.log('countries: ', countries);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-5">
      {countries.map((country) => (
        <div key={country.name} className="bg-dark-blue rounded-md shadow-md transition-all duration-300 hover:opacity-80 hover:scale-105">
          <Link to={`/country/${country.name}`}>
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-full overflow-hidden rounded-t-md"
            />
            <div className="p-5">
              <Heading>{country.name}</Heading>
              <Paragraph
                name={"Population"}
                value={formatNumberWithCommas(country.population)}
              />
              <Paragraph name={"Region"} value={country.region} />
              <Paragraph name={"Capital"} value={country.capital} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
