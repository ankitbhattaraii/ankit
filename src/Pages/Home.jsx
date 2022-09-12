import React from "react";
import Typewriter from "typewriter-effect";
import Footer from "../Components/Footer";
import { DP, Skills, Header, ProjectSection } from "../Globals/Imports";
import "../styles/Home.css";

export const Home = () => {
  new Typewriter("#typewriter", {
    strings: ["Hello", "World"],
    autoStart: true,
  });

  const data = {
    name: "Ankit",
    description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do
    amet sint. Velit officia consequat duis enim velit mollit.
    Exercitation veniam consequat sunt nostrud amet.`,
    skill_1: "Designer",
    skill_2: "developer",
    skill_3: "creator",
    btn_text: "Download Resume",
  };

  return (
    <>
      <Header />
      <div className="home flex-al-jc-center">
        <div className="hero-div-wrapper flex align-item-center">
          <div className="hero-div flex justify-content-center">
            <h1>
              Hi, I am {data.name}, <br /> a
              <span className="h1-span">
                <Typewriter
                  options={{
                    strings: [data.skill_1, data.skill_2, data.skill_3],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p>{data.description}</p>
            <button>{data.btn_text}</button>
          </div>
          <div className="hero-image flex-al-jc-center ">
            <div className="img">
              <img src={DP.url} alt="ujjwal" />
            </div>
          </div>
        </div>
      </div>
      {/* <RecentWork /> */}
      <Skills />
      {/* <ProjectSection /> */}
      <Footer />
    </>
  );
};
