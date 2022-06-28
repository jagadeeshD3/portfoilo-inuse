import React from "react";
import "./Testimonial.css";
import "swiper/css";

import "swiper/css/pagination";

const Testimonial = () => {
  
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>About Me</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      
              <div className="testimonial">
              
                <span>I'm very ambitious full-stack developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.I was keen in front-end tech HTML,CSS,Javascript along with Reactjs and Vuejs framworks, Nodejs and Expressjs for server-side rendering and finally MongoDb and firebase for database managament.<br /><br />I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.I'm also keen and enthusiastic to learn new tech.<br /><br />If I need to define myself in one sentence that would be a final year student from IIT(ISM) who is tech-obsessed and constantly learning new technologies and currently embracing web developing and web stack building.</span>
              </div>
            
      
  
    </div>
  );
};

export default Testimonial;
