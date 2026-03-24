import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isToggled, setIstoggled] = useState(false);

  const handleToggler = () => {
    setIstoggled((prev) => !prev);
  };

  return (
    <>
      <nav className={`sidebar-container ${isToggled ? "open-sidebar" : ""}`}>
        <ul className="sidebar-menu">
          <Link to="/">
            <li className="link">Home</li>
          </Link>

          <hr />
          <Link to="/about-us">
            <li className="link">About Us</li>
          </Link>
          <hr />
          <Link to="/services">
            <li className="link">Services</li>
          </Link>
          <hr />
          <Link to="/contact-us">
            <li className="link">Contact</li>
          </Link>
          <hr />
          <Link to="/contact-us">
            <li className="link">
              <button>Book Your Safari</button>
            </li>
          </Link>
        </ul>
      </nav>
      <nav className="navbar-container">
        <Link to="/">
          <div className="logo-content">
            <img src="/logo.png" alt="" />
            <h1>Elephant Lodge</h1>
          </div>
        </Link>
        <ul className="navbar-menu">
          <Link to="/">
            <li className="link">Home</li>
          </Link>

          <Link to="/about-us">
            <li className="link">About Us</li>
          </Link>

          <Link to="/services">
            <li className="link">Services</li>
          </Link>

          <Link to="/contact-us">
            <li className="link">Contact</li>
          </Link>

          <Link to="/contact-us">
            <li className="link">
              <button>Book Your Safari</button>
            </li>
          </Link>
        </ul>
        <div className="menu-icons" onClick={handleToggler}>
          {isToggled ? (
            <img src="/close.png" alt="" className="sidebar-toggler" />
          ) : (
            <img src="/open.png" alt="" className="sidebar-toggler" />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
