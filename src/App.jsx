import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = (setter) => {
    setter((prev) => !prev);
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add("light-mode");
    } else {
      rootElement.classList.remove("light-mode");
    }
  }, [darkMode]);

  return (
    <>
      <Header
        darkMode={darkMode}
        onToggleDarkMode={() => handleToggle(setDarkMode)}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
