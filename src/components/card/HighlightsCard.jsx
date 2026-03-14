import React from "react";
import "./styles.css";

const HighlightsCard = ({ icon, title, description }) => {
  return (
    <>
      <div className="card">
        <img src={icon} alt="" />
        <h1>{title}</h1>
        <hr />
        <p>{description}</p>
      </div>
    </>
  );
};

export default HighlightsCard;
