import { useEffect, useState } from "react";
import "./App.css";
import data from "./assets/data.json";
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function App() {
  const [countryData, setCountryData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [regionName, setRegionName] = useState(null);

  const handleToggle = (setter) => {
    setter((prev) => !prev);
  };
  const updateCountryData = (newData) => {
    setIsLoading(true);
    setTimeout(() => {
      setCountryData(newData);
      setIsLoading(false);
    }, 1000);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const filteredData = data.filter((country) =>
      country.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    updateCountryData(filteredData);
    setRegionName(null);
  };

  const handleResetFilter = () => {
    updateCountryData(data);
    setRegionName(null);
  };

  const handleRegionClick = (region) => {
    const filteredData = data.filter((country) => country.region === region);
    updateCountryData(filteredData);
    setRegionName(region);
  };

  useEffect(() => {
    updateCountryData(data);
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add("light-mode");
    } else {
      rootElement.classList.remove("light-mode");
    }
  }, [darkMode]);

  return (
    <div className="bg-very-dark-blue-bg min-w-screen min-h-screen h-fit text-white">
      <div className="bg-dark-blue mb-5 shadow-md">
        <div className="max-w-screen-xl mx-auto p-5 flex justify-between items-center">
          <p className="font-bold">Where in the world?</p>
          <button
            onClick={() => handleToggle(setDarkMode)}
            className="flex gap-2"
          >
            <span className="mt-0.5">
              <ion-icon
                name={`${darkMode ? "moon-outline" : "sunny-outline"}`}
                size="small"
              ></ion-icon>
            </span>
            {!darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex justify-between flex-col md:flex-row px-5 gap-5">
        <div className="relative md:w-2/5 shadow-md">
          <span className="absolute inset-y-0 start-0 grid place-content-center ms-10">
            <ion-icon name="search-sharp"></ion-icon>
          </span>
          <input
            onChange={handleSearch}
            type="text"
            className="w-full rounded-md border-none outline-none bg-dark-blue ps-24 p-5"
            placeholder="Search for a country..."
          />
        </div>

        <button
          className="relative shadow-md bg-dark-blue md:w-2/5 flex justify-between items-center p-5 rounded-md"
          onClick={() => handleToggle(setToggleDropdown)}
        >
          <p className="">{regionName ?? "Filter by Region"}</p>
          <ion-icon
            name={`${
              toggleDropdown ? "chevron-up-outline" : "chevron-down-outline"
            }`}
            size="small"
          ></ion-icon>
          <div
            style={{
              display: !toggleDropdown && "none",
            }}
            className="absolute shadow-md bg-dark-blue p-5 rounded-md grid top-20 start-0 w-full"
          >
            <p onClick={handleResetFilter} className="p-2 text-start">
              Reset
            </p>
            {regions.map((region) => (
              <p
                key={region}
                onClick={() => handleRegionClick(region)}
                className="p-2 text-start"
              >
                {region}
              </p>
            ))}
          </div>
        </button>
      </div>

      <div className="max-w-screen-xl mx-auto p-5">
        {isLoading ? (
          <h1 className="text-xl text-center my-20">Loading...</h1>
        ) : countryData.length ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {countryData.map((country) => (
              <div
                key={country.name}
                className="bg-dark-blue rounded-md shadow-md"
              >
                <div className="">
                  <img
                    src={country.flag}
                    alt=""
                    className="w-full overflow-hidden rounded-t-md"
                  />
                </div>
                <div className="p-5">
                  <h1 className="font-bold text-lg mb-2">{country.name}</h1>
                  <p className="">
                    <span className="font-bold text-sm">Population :</span>
                    <span className="text-dark-gray">
                      {" "}
                      {country.population}
                    </span>
                  </p>
                  <p className="">
                    <span className="font-bold text-sm">Region :</span>
                    <span className="text-dark-gray"> {country.region}</span>
                  </p>
                  <p className="">
                    <span className="font-bold text-sm">Capital :</span>
                    <span className="text-dark-gray"> {country.capital}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-xl text-center my-20">Country data not found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
