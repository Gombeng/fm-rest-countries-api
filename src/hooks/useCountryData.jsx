import { useEffect, useState } from "react";
import data from "../assets/data.json";

export const useCountryData = () => {
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateCountryData = (newData) => {
    setIsLoading(true);
    setTimeout(() => {
      setCountryData(newData);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    updateCountryData(data);
  }, []);

  const handleSearch = (value) => {
    const filteredData = data.filter((country) =>
      country.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    updateCountryData(filteredData);
  };

  const handleRegionClick = (region) => {
    const filteredData = data.filter((country) => country.region === region);
    updateCountryData(filteredData);
  };

  const handleResetFilter = () => {
    updateCountryData(data);
  };

  return {
    countryData,
    isLoading,
    handleSearch,
    handleRegionClick,
    handleResetFilter,
  };
};
