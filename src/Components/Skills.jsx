import React from "react";
import "../styles/Skills.css";

let data = [
  {
    name: "React",
    path: require("../Assets/react-icon.png"),
  },
  {
    name: "Python",
    path: require("../Assets/python.png"),
  },
  {
    name: "Flask",
    path: require("../Assets/flask.png"),
  },
  {
    name: "Javascript",
    path: require("../Assets/javascript.png"),
  },
  {
    name: "Figma",
    path: require("../Assets/figma.png"),
  },
];

const Skills = () => {
  return (
    <div className="skills flex-al-jc-center ">
      <h1>Expertise</h1>
      <div className="skills-images flex-al-jc-center">
        {data.map((skill) => {
          return <img src={skill.path} alt={skill.name} key={skill.name} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
