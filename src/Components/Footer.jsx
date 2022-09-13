import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const data = {
    discription: "created by",
    link: "https://ujjwalbhandarii.com.np",
    link2: "",
    name: "Ujjwal",
    name2: "Ankit",
  };
  return (
    <div className="footer flex-al-jc-center">
      {
        <h1>
          {data.discription} <a href={data.link}>{data.name}</a> &{" "}
          <a href={data.link2}>{data.name2}</a>
        </h1>
      }
    </div>
  );
};

export default Footer;
