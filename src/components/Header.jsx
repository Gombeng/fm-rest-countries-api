import Icon from "./Icon";

/* eslint-disable react/prop-types */
function Header({ darkMode, onToggleDarkMode }) {
  return (
    <div className="bg-dark-blue shadow-md text-white fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto p-5 flex justify-between items-center">
        <p className="font-bold ">Where in the world?</p>
        <button onClick={onToggleDarkMode} className="flex gap-2">
          <span className="mt-0.5">
            <Icon name={`${!darkMode ? "moon" : "moon-outline"}`} />
          </span>
          Dark Mode
        </button>
      </div>
    </div>
  );
}

export default Header;
