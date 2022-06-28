import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My </span>
        <span>Skills</span>
    
        <spane>
          <br />
          <br />
          C++,Java,Python(Beginner),html,css,javascript,Reactjs,Vuejs,Nodejs,Expressjs &#160;&#160;&#160;&#160;&#160;&#160;&#160;
          <br />
          Firebase,Mongobd,Authentication,api,Chai(for quality assurance),DSA,Oops
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            heading={"IIT(ISM) Dhanbad"}
            detail={"Bachelor of technology in Mechanical Engineering"}
            year={"Batch: 2019 - 2023"}
            gpa={"GPA: 7.55"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            heading={"Narayana Junior College"}
            detail={"INTER CBSE"}
            year={"Batch: 2017 - 2019"}
            gpa={"Percentage: 88.8%"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            heading={"Narayana High School"}
            detail={
              "10th CBSE"
            }
            gpa={"Grade Point: 10"}
            year={"PassOut: 2017"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
