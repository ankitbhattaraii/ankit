import React, { useState } from "react";
import { Link, HiLightBulb, FaBars } from "../../Globals/Imports";

import "./Header.css";

export const Header = () => {
  const [toggler, settoggler] = useState(false);
  // const [header, setHeader] = useState(false);

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

  // const header = document.getElementById("header");

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY >= 200) {
  //     // console.log("hy");
  //     header.style.backgroundColor = "blue";
  //   } else {
  //     header.style.backgroundColor = "transparent";
  //   }
  // });

  // style={window.addEventListener("scroll", () => {
  //   if (window.pageYOffset >= 100) {
  //     return {
  //       backgroundColor: "blue",
  //     };
  //   } else {
  //     return {
  //       backgroundColor: "transparent",
  //     };
  //   }
  // })}

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
