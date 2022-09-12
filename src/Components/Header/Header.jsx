import React, { useState, useEffect } from "react";
import { Link, HiLightBulb, FaBars } from "../../Globals/Imports";

import "./Header.css";

export const Header = () => {
  const [toggler, settoggler] = useState(false);

  const handleOnClick = () => {
    console.log("dark mode enabled");
  };

  let data = [
    {
      link: "home",
      path: "/",
    },
    {
      link: "skills",
      path: "/skills",
    },
    {
      link: "projects",
      path: "/projects",
    },
    {
      link: "contact",
      path: "/contact",
    },
    {
      link: "blog",
      path: "/blog",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const header = document.getElementById("header");
      const links = document.querySelectorAll(".links a");
      if (window.scrollY >= 200) {
        header.style.background = "rgba(2, 2, 120, 0.8)";
        links.forEach((link) => {
          link.style.color = "white";
        });
      } else {
        header.style.backgroundColor = "transparent";
        links.forEach((link) => {
          link.style.color = "black";
        });
      }
    });
  }, []);

  return (
    <>
      <div className="header flex align-item-center" id="header">
        <ul
          className={
            toggler === true
              ? "links flex-al-jc-center show"
              : "links flex-al-jc-center"
          }
        >
          {data.map((links) => {
            return (
              <Link to={links.path} key={links.link}>
                {links.link}
              </Link>
            );
          })}
          <HiLightBulb onClick={handleOnClick} />
        </ul>
        <FaBars
          className="bars"
          onClick={() => {
            settoggler(!toggler);
          }}
        />
      </div>
    </>
  );
};
