import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="opacity"></div>
        <h1 className="hero-header">Welcome to Elephant Lodge</h1>
        <p className="hero-subheader">
          a premier sanctuary designed for those seeking a profound connection
          with nature without sacrificing modern comfort.
        </p>

        <button>
          {" "}
          <Link to="/contact-us">Book Your Safari</Link>
        </button>
      </div>
    </>
  );
};

export default Hero;
