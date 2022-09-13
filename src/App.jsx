import React from "react";
import {
  Router,
  Home,
  Route,
  Routes,
  Header,
  Blog,
  Contact,
} from "./Globals/Imports";
import "./styles/App.css";
import { DarkModeProvider } from "./Components/DarkModeContext";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
