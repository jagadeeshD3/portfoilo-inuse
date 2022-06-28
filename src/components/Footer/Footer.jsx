import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>@Dasari Jagadeesh</span>
        <div className="f-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jagadeesh-dasari-b827b3190/"><LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://github.com/jagadeeshD3" target="_blank" rel="noopener noreferrer" ><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
