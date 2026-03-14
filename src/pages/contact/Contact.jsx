import React from "react";
import "./styles.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="services-conatiner">
        <div className="section-header">
          <div className="header">
            Get in Touch
            <hr />
          </div>
          <p>
            {" "}
            Have questions about our safari packages or ready to book your
            adventure? We're her to help!.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="form-container">
            <h1>Send us a Message</h1>

            <div className="fields">
              <label htmlFor="">
                Full Name <input type="text" placeholder="Enter your name" />
              </label>
              <label htmlFor="">
                Email Address{" "}
                <input type="text" placeholder="your.email@example.com" />
              </label>
              <label htmlFor="">
                Full Name{" "}
                <textarea
                  placeholder="Tell us about your safari plans..."
                  rows={10}
                  cols={15}
                />
              </label>
              <button>Send Message</button>
            </div>
          </div>
          <div className="form-container">
            <h1>Contact Information</h1>

            <div className="fields">
              <ul className="information">
                <li>
                  <img src="/location-icon.png" alt="" />
                  143 great street, Louis Trichardt
                </li>
                <li>
                  <img src="/phone-icon.png" alt="" />
                  0739494688
                </li>
                <li>
                  <img src="/email-icon.png" alt="" />
                  jadetumi@gmail.com
                </li>
              </ul>
              <hr />
              <h1>Operating hours</h1>

              <div className="fields">
                <ul className="information">
                  <li>Reception: 24/7</li>
                  <li>Safari Tours: 5:00 AM - 7:00 PM</li>
                  <li>Restaurant: 6:00 AM - 10:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="section-header">
          <div className="header">
            Find Us
            <hr />
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117493.2532377661!2d29.766164697265626!3d-23.03609999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec66c2f26195cc5%3A0x2a496ece589ac617!2sLouis%20Trichardt%20Lodge!5e0!3m2!1sen!2sza!4v1773482361873!5m2!1sen!2sza"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
