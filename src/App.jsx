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
  BounceLoader,
} from "./Globals/Imports";
import "./styles/App.css";

function App() {
  const [loaderr, setloaderr] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloaderr(false);
    }, 3000);
  });

  return (
    <>
      {loaderr ? (
        <div className="app">
          <BounceLoader loading={loaderr} size={200} color="blueviolet" />
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
