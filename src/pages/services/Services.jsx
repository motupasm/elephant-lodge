import React from "react";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-conatiner">
        <div className="section-header">
          <div className="header">
            Accomodation Options
            <hr />
          </div>
          <p>
            {" "}
            Choose from our range of comfortable accomodations, each designed to
            blend luxury with the natural beauty of the African bush.
          </p>
        </div>

        <div className="rooms-container">
          <div className="room-container">
            <div className="image">
              <img src="/room1.jpg" alt="" />
              <div className="opacity"></div>
            </div>
            <div className="card-information">
              <h1 className="card-header">Standard Safari room</h1>
              <h2 className="card-price">
                R 2,500 <span>per night</span>
              </h2>
              <ul className="offers">
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Queen or twin beds
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Private bathroom
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Air conditioning
                </li>

                <li className="offer">
                  <img src="/mark.png" alt="" />
                  mini-bar
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Wildlife viewing deck
                </li>
              </ul>
              <Link to="/contact-us">
                <button>Book Now</button>
              </Link>
            </div>
          </div>
          <div className="room-container">
            <div className="image">
              <img src="/room3.jpg" alt="" />
              <div className="opacity"></div>
            </div>
            <div className="card-information">
              <h1 className="card-header">Luxury Bush Suite</h1>
              <h2 className="card-price">
                R 4,500 <span>per night</span>
              </h2>
              <ul className="offers">
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  king-size bed
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Luxury bathroom with bathtub
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Private plunge pool
                </li>

                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Outdoor shower
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Buttler service
                </li>
              </ul>
              <Link to="/contact-us">
                <button>Book Now</button>
              </Link>
            </div>
          </div>
          <div className="room-container">
            <div className="image">
              <img src="/room2.jpg" alt="" />
              <div className="opacity"></div>
            </div>
            <div className="card-information">
              <h1 className="card-header">family Safari Lodge</h1>
              <h2 className="card-price">
                R 6,200 <span>per night</span>
              </h2>
              <ul className="offers">
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Sleep up to 5 guests
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Full Kitchen
                </li>

                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Living area
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Private game viewing area
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  Ideal for families
                </li>
              </ul>
              <Link to="/contact-us">
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="packages-container">
          <div className="section-header">
            <div className="header">
              Safari Packages
              <hr />
            </div>
            <p>
              {" "}
              Experience the african wilderness with our expectly guided safari
              tours designed for unforgettable encounters.
            </p>
          </div>
          <div className="containers">
            <div className="package-container">
              <img src="/sunrise.png" alt="" className="time-icon" />

              <h1 className="card-header">Morning Safari</h1>

              <span>3-4 hours</span>
              <h2 className="card-price">
                R 800 <span>per person</span>
              </h2>
              <span>
                Start your day with an early morning game drive when animals are
                most active
              </span>
              <hr />

              <ul className="offers">
                <h5 className="include">Includes:</h5>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Professional guide</span>
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Open safari vehicle</span>
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Coffee and snacks</span>
                </li>

                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Binocilars provided</span>
                </li>
              </ul>
              <Link to="/contact-us">
                <button>Book Safari</button>
              </Link>
            </div>
            <div className="package-container">
              <img src="/sunset-icon.png" alt="" className="time-icon" />

              <h1 className="card-header">Sunset Safari</h1>

              <span>3-4 hours</span>
              <h2 className="card-price">
                R 950 <span>per person</span>
              </h2>
              <span>
                Experience the magic of African sunset with sundowners in the
                bush.
              </span>
              <hr />

              <ul className="offers">
                <h5 className="include">Includes:</h5>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Expert range</span>
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Sunset drinks</span>
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Evening snacks</span>
                </li>

                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Night vision equipment</span>
                </li>
              </ul>
              <Link to="/contact-us">
                <button>Book Safari</button>
              </Link>
            </div>
            <div className="package-container">
              <img src="/day.png" alt="" className="time-icon" />

              <h1 className="card-header">Full-Day Safari</h1>

              <span>8 hours</span>
              <h2 className="card-price">
                R 2,400 <span>per person</span>
              </h2>
              <span>
                Comprehensive wildlife experience with morning and afternoon
                game driver.
              </span>
              <hr />

              <ul className="offers">
                <h5 className="include">Includes:</h5>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Two game drives</span>
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Lunch included</span>
                </li>
                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>Professional photography tips</span>
                </li>

                <li className="offer">
                  <img src="/mark.png" alt="" />
                  <span>All refreshments</span>
                </li>
              </ul>
              <Link to="/contact-us">
                <button>Book Safari</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-servuces">
        <Footer />
      </div>
    </>
  );
};

export default Services;
