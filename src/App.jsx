import React, { useState, useEffect } from "react";
import {
  Router,
  Home,
  Route,
  Routes,
  Header,
  Blog,
  Contact,
  DarkModeProvider,
  ClimbingBoxLoader,
} from "./Globals/Imports";
import "./styles/App.css";

function App() {
  const [loaderr, setloaderr] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloaderr(false);
    }, 2800);
  });

  return (
    <>
      {loaderr ? (
        <div className="loader">
          <div className="inner-div">
            <ClimbingBoxLoader loading={loaderr} size={30} color="blueviolet" />
          </div>
        </div>
      ) : (
        <Router>
          <DarkModeProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </DarkModeProvider>
        </Router>
      )}
    </>
  );
}

export default App;
