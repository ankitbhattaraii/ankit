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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
