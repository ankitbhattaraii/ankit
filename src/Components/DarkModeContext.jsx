import React, { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const themeGetter = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };
  const [darkMode, setDarkmode] = useState(themeGetter());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkmode = () => {
    setDarkmode(!darkMode);
  };

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkmode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeContext, DarkModeProvider };
