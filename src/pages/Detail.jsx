/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../assets/data.json";
import { Icon, FreeText, Heading, Paragraph } from "../components";
import {
  formatNumberWithCommas,
  getCountryNameByAlpha3Code,
  languages,
} from "../utils";

function Detail() {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      setTimeout(() => {
        const foundCountry = data.find(
          (country) => country.name === countryName
        );
        setCountry(foundCountry);
        setIsLoading(false);
      }, 300);
    };

    fetchData();
  }, [countryName]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-very-dark-blue-bg min-w-screen min-h-screen h-fit text-white p-5 pt-20 transition-all duration-300">
      {isLoading ? (
        <FreeText>Loading...</FreeText>
      ) : !country ? (
        <FreeText>Country not found</FreeText>
      ) : (
        <div className="max-w-screen-xl mx-auto p-5">
          <button
            onClick={handleBack}
            className="bg-dark-blue shadow-md rounded-sm py-2 px-8 flex items-center gap-1 mt-5 mb-16 lg:mb-0 transition-all duration-300 hover:opacity-90"
          >
            <Icon name="arrow-back-outline" />
            Back
          </button>
          <CountryDetails country={country} />
        </div>
      )}
    </div>
  );
}

function CountryDetails({ country }) {
  return (
    <div className="flex flex-col lg:flex-row md:items-center justify-center lg:gap-36">
      <div className="max-w-lg">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-full rounded-md shadow-md"
        />
      </div>
      <div className="my-16">
        <Heading className={"mb-5 text-3xl"}>{country.name}</Heading>
        <CountryInfo country={country} />
        <CountryBorders country={country} />
      </div>
    </div>
  );
}

function CountryInfo({ country }) {
  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mb-10">
      <div className="">
        <Paragraph name={"Native Name"} value={country.nativeName} />
        <Paragraph
          name={"Population"}
          value={formatNumberWithCommas(country.population)}
        />
        <Paragraph name={"Region"} value={country.region} />
        <Paragraph name={"Sub Region"} value={country.subregion} />
        <Paragraph name={"Capital"} value={country.capital} />
      </div>
      <div className="">
        <Paragraph
          name={"Top Level Domain"}
          value={country.topLevelDomain[0]}
        />
        <Paragraph name={"Currencies"} value={`( ${country.currencies[0].symbol} ) ${country.currencies[0].name}`} />
        <Paragraph name={"Languages"} value={languages(country.languages)} />
      </div>
    </div>
  );
}

function CountryBorders({ country }) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-xl">Border Countries: </p>
      <div className="flex gap-3 flex-wrap">
        {!country.borders
          ? "-"
          : country.borders.map((alpha3Code) => (
              <span
                key={alpha3Code}
                className="p-1 px-7 bg-dark-blue shadow-md rounded-sm transition-all duration-300"
              >
                {getCountryNameByAlpha3Code(data, alpha3Code)}
              </span>
            ))}
      </div>
    </div>
  );
}

export default Detail;
