/* eslint-disable react/prop-types */
const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="md:w-2/5 shadow-md relative">
      <span className="absolute inset-y-0 start-0 grid place-content-center ms-10">
        <ion-icon name="search-sharp"></ion-icon>
      </span>
      <input
        onChange={handleSearch}
        type="text"
        className="w-full rounded-md border-none outline-none bg-dark-blue ps-24 p-5 transition-all duration-300"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default SearchBar;
