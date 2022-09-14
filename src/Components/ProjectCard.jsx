import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="project-left">
        <img src={require("../Assets/ProjectImg/greenctg.jpg")} alt="" />
      </div>
      <div className="project-right">
        <div className="project-right-up">
          <div className="right-up-img">
            <img src={require("../Assets/ProjectImg/projectImg.png")} alt="" />
          </div>
          <div className="right-up-img">
            <img
              src={require("../Assets/ProjectImg/showcase-2-3.jpg")}
              alt=""
            />
          </div>
        </div>
        <div className="project-right-bottom">
          <img src={require("../Assets/ProjectImg/cavinimg.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
