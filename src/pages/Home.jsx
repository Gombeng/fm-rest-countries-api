// pages/Home.jsx
import { useState } from "react";
import { useCountryData } from "../hooks/useCountryData";
import {
  SearchBar,
  DropdownFilter,
  CountryList,
  FreeText,
} from "../components";

function Home() {
  const [regionName, setRegionName] = useState(null);
  const {
    countryData,
    isLoading,
    handleSearch,
    handleRegionClick,
    handleResetFilter,
  } = useCountryData();

  const handleRegionClickWrapper = (region) => {
    handleRegionClick(region);
    setRegionName(region);
  };

  const handleResetFilterWrapper = () => {
    handleResetFilter();
    setRegionName(null);
  };

  return (
    <div className="bg-very-dark-blue-bg min-w-screen min-h-screen h-fit text-white p-5 pt-24 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto flex justify-between flex-col md:flex-row gap-5 mb-2">
        <SearchBar onSearch={handleSearch} />
        <DropdownFilter
          onRegionClick={handleRegionClickWrapper}
          onResetFilter={handleResetFilterWrapper}
          regionName={regionName}
        />
      </div>

      <div className="max-w-screen-xl mx-auto">
        {isLoading ? (
          <FreeText>Loading...</FreeText>
        ) : !countryData.length ? (
          <FreeText>Country data not found!</FreeText>
        ) : (
          <CountryList countries={countryData} />
        )}
      </div>
    </div>
  );
}

export default Home;
