import React from "react";
import "./Card.css";

const Card = ({emoji, heading,gpa,year, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      {heading}
      <span>{detail}</span>
      <span>{gpa}</span>
      <span>{year}</span>
    </div>
  );
};

export default Card;
