// react
export { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// components
// export { default as Loader } from "../Components/Loader";
export { Header } from "../Components/Header";
export { RecentWork } from "../Components/RecentWork";
export { default as Skills } from "../Components/Skills";
export { default as Projects } from "../Components/Projects";
export { default as ProjectCard } from "../Components/ProjectCard";
export { default as Blog } from "../Pages/Blog";
// export { default as Contact } from "../Pages/Contact";
export { default as Contact } from "../Components/Contact";
export { default as Footer } from "../Components/Footer";

export {
  DarkModeContext,
  DarkModeProvider,
} from "../Components/DarkModeContext";

// pages
export { Home } from "../Pages/Home";

// icons
export { TbBulb } from "react-icons/tb";
export { FaLightbulb, FaBars } from "react-icons/fa";
export { HiLightBulb } from "react-icons/hi";
// export { HiBars3 } from "react-icons/hi";

//assets
export const DP = {
  url: require("../Assets/DP1.jpg"),
};

// loader
export { default as ClimbingBoxLoader } from "react-spinners/ClimbingBoxLoader";
