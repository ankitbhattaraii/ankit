import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const data = {
    discription: "created by",
    link: "https://ujjwalbhandarii.com.np",
    name: "Ujjwal",
    name2: "ankit",
  };
  return (
    <div className="footer flex-al-jc-center">
      {
        <h1>
          {data.discription}{" "}
          <a href={data.link}>
            {data.name} & {data.name2}
          </a>
        </h1>
      }
    </div>
  );
};

export default Footer;
