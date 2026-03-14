import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./pages/about_us/About.jsx";
import Services from "./pages/services/Services.jsx";
import Contact from "./pages/contact/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route index element={<App />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
);
