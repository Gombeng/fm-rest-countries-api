/* eslint-disable react/prop-types */
import { useState } from "react";
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const DropdownFilter = ({ onRegionClick, onResetFilter, regionName }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggle = () => {
    setToggleDropdown((prev) => !prev);
  };

  return (
    <button
      className="relative shadow-md bg-dark-blue md:w-2/5 flex justify-between items-center p-5 rounded-md"
      onClick={handleToggle}
    >
      <p>{regionName ?? "Filter by Region"}</p>
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
        <p onClick={onResetFilter} className="p-2 text-start">
          Reset
        </p>
        {regions.map((region) => (
          <p
            key={region}
            onClick={() => onRegionClick(region)}
            className="p-2 text-start"
          >
            {region}
          </p>
        ))}
      </div>
    </button>
  );
};

export default DropdownFilter;
