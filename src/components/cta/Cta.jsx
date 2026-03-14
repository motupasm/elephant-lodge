import React from "react";
import "./styles.css";
import HighlightsCard from "../card/HighlightsCard";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <>
      <div className="cta-container">
        <h1>Ready for Your Adventure?</h1>
        <p>
          Join us for an unforgettable safari experience in the heart of Africa
        </p>
        <button>
          <Link to="/services">Explore Our Packages</Link>
        </button>
        <div className="opacity"></div>
      </div>
    </>
  );
};

export default Cta;
