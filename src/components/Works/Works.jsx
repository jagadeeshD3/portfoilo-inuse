import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Shopify from "../../img/unschool.webp";
import Facebook from "../../img/technoco-modified.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Experience
          </span>
          <span></span>
          <spane>
            <span>TECHNOCOLABS SOFTWARES</span>
            <br />
            -Internship
            <br />
            <br />
            In this we developed a website basically provides courses to
            the learners. I have developed the authentication,signup<br />
            forms for both students and Instructors. Along with these I
            created students’s and Instructor’s profile pages. Connected <br />
            these to the databases<br />
            Tech: MongoDb,Reactjs,Nodejs, HTML, CSS,Javascript.
            <br /><br />
            <span>Unschool</span>
            <br />
            -Internship
            <br />
            <br />
            Worked as Unschool Community Influencer and Graphic Designer. Work out there involves market research to identify
            <br />the target market for the products and promoting products and designing the promotions brouchers and maintaining the
            <br />sales blog pages. Took a large part in UI/UX designing,market expansion and market penetration. It helped a lot to improve
            <br />my designing skills and communication skills. 

          </spane>
          
          
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
