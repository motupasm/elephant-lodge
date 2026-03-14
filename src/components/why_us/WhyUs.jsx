import React from "react";
import "./styles.css";

const WhyUs = () => {
  return (
    <>
      <div className="why-us-container">
        <div className="information">
          <h1 className="header">Why Us?</h1>
          <hr />
          <p>
            Experience luxury and adventure at Elephant Lodge, nestled in
            stunning natural surroundings. Enjoy guided game drives, elegant
            accommodations, and immersive experiences like cultural visits and
            sunset dining. Join us for an unforgettable safari escape
          </p>
        </div>
        <div className="images">
          <div className="opacity"></div>
          <img src="/us3.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default WhyUs;
