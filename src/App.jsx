import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import WhyUs from "./components/why_us/WhyUs";
import Highlights from "./components/highlights/Highlights";
import Cta from "./components/cta/Cta";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Highlights />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
