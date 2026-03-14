import React from "react";
import "./styles.css";
import HighlightsCard from "../card/HighlightsCard";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <ul className="footer-items">
          <ul className="item">
            <div className="logo-content">
              <img src="/logo.png" alt="" />
              <h1>Elephant Lodge</h1>
            </div>

            <p>
              Experience the magic of African wildlife in luxury and comfort at
              our premier safari lodge.
            </p>
          </ul>

          <ul className="item-link">
            <li className="footer-header">Quick Links</li>
            <Link to="/">
              <li className="footer-link">Home</li>
            </Link>
            <Link to="/about-us">
              <li className="footer-link">About Us</li>
            </Link>
            <Link to="/services">
              <li className="footer-link">Services</li>
            </Link>
            <Link to="/contact-us">
              <li className="footer-link">Contact</li>
            </Link>
          </ul>
          <ul className="item-link">
            <li className="footer-header">Contact Info</li>
            <li className="footer-link">
              <img src="/location-icon.png" alt="" />
              143 great street, Louis Trichardt
            </li>
            <li className="footer-link">
              <img src="/phone-icon.png" alt="" />
              0739494688
            </li>
            <li className="footer-link">
              <img src="/email-icon.png" alt="" />
              jadetumi@gmail.com
            </li>
          </ul>
          <ul className="item-link">
            <li className="footer-header">Operating Hours</li>
            <li className="footer-link">Reception: 24/7</li>
            <li className="footer-link">Safari Tours: 5:00 AM - 7:00 PM</li>
            <li className="footer-link">Restaurant: 6:00 AM - 10:00 PM</li>
          </ul>
        </ul>
        <hr />
        <p className="copyrite">© 2026 Elephant Lodge. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
