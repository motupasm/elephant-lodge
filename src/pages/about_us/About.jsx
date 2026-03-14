import React from "react";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import HighlightsCard from "../../components/card/HighlightsCard";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-us">
          <div className="about-us-information">
            <div className="header">
              Our Story
              <hr />
            </div>
            <p>
              Founded in 1998, Elephant Lodge was born from a deep love for
              Africa's incredible wildlife and a vision to share this magic with
              the world. What started as a small family-run operation has grown
              into one of South Africa's most respected safari destinations.
              <br />
              <br />
              Located near the renowned Kruger National Park, our lodge has
              welcomed thousands of guests from around the globe, each leaving
              with memories that last a lifetime. We take pride in our
              commitment to conservation, community development, and sustainable
              tourism. <br />
              <br /> Our experienced team of guides, hospitality staff, and
              conservationists work together to ensure every visit is
              exceptional, combining adventure with comfort and education with
              entertainment.
            </p>
          </div>
          <div className="images">
            <div className="image">
              <img src="/us4.jpg" alt="" />
              <div className="opacity"></div>
            </div>
            <div className="image">
              <img src="/us2.jpg" alt="" />
              <div className="opacity"></div>
            </div>
            <div className="image">
              <img src="/us1.jpg" alt="" />
              <div className="opacity"></div>
            </div>
            <div className="image">
              <img src="/us3.jpg" alt="" />
              <div className="opacity"></div>
            </div>
          </div>
        </div>

        <div className="goal-container">
          <div className="card-goal">
            <img src="/target.png" alt="" />
            <h1>Our Mission</h1>
            <hr />

            <p>
              To provide guests with transformative wilderness experiences
              through sustainable tourism, luxury hospitality, and active
              wildlife conservation. Vision: To become a global leader in
              eco-friendly luxury travel, ensuring that the majestic landscapes
              we call home thrive for generations to come.
            </p>
          </div>
          <div className="card-goal">
            <img src="/eye.png" alt="" />
            <h1>Our Version</h1>
            <hr />
            <p>
              Our Vision To be Africa's leading eco-tourism destination,
              recognized for exceptional guest experiences, wildlife
              conservation efforts, and positive community impact. We envision a
              future where tourism and conservation work hand-in-hand to protect
              wildlife for generations to come.
            </p>
          </div>
        </div>

        <div className="Sheader">
          Who We Serve <hr />
        </div>
        <div className="card-container">
          <HighlightsCard
            title="Adventure Tourists"
            icon="/adventure-icon.png"
            description="Thrill-seekers searching for authentic African safari experiences and exciting wildlife encounters."
          />
          <HighlightsCard
            title="Photographers"
            icon="/cameraman-icon.png"
            description="Capturing incredible wildlife moments and breathtaking African landscapes with skill."
          />
          <HighlightsCard
            title="Wildlife Enthusiasts"
            icon="/wild-icon.png"
            description="Nature lovers devoted to observing wild animals safely in their natural habitat daily."
          />
          <HighlightsCard
            title="Families"
            icon="/family-icon.png"
            description="Creating lasting memories together in a fun, safe, and educational environment."
          />
        </div>
      </div>
      <div className="footer-about">
        <Footer />
      </div>
    </>
  );
};

export default About;
