import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [darkMode, setDarkmode] = useState(false);

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
