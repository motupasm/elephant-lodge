import React from "react";
import "./styles.css";
import HighlightsCard from "../card/HighlightsCard";

const Highlights = () => {
  return (
    <>
      <div className="highlights-container">
        <h1 className="header">Safari Highlights</h1>
        <div className="card-container">
          <HighlightsCard
            icon={"/luxury-icon.png"}
            title="Luxury Accommodation"
            description="Experience comfort in our safari-themed lodges with modern amenities and breathtaking views."
          />
          <HighlightsCard
            icon={"/search-icon.png"}
            title="Guided Safari Tours"
            description="Expert rangers lead you through unforgettable wildlife encounters in their natural habitat."
          />
          <HighlightsCard
            icon={"/camera-icon.png"}
            title="Wildlife Photography"
            description="Capture stunning moments with the Big Five and diverse African wildlife species."
          />
          <HighlightsCard
            icon={"/sunset-icon.png"}
            title="Sunset Experiences"
            description={`Enjoy magical African sunsets with sundowners in the heart of the wilderness.`}
          />
        </div>
      </div>
    </>
  );
};

export default Highlights;
