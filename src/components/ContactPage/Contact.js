import React from "react";
import TopSection from "../TopSection";
import Home9 from "../Home/Home9";
import phoneIcon from "../../assets/Contact/Vector-2.svg";
import mailIcon from "../../assets/Contact/Vector-1.svg";
import locatinIcon from "../../assets/Contact/Vector.svg";

const Contact = () => {
    document.title = "Contact Us"
  return (
    <div className="contact" id="contact-us">
      <TopSection title={"Contact Us"} />

      {/* SECTION-2 */}
      <div className="contact-section-2">
        <div className="contact-section2-container">
          <div className="contact-section2-left-side">
            <div>
              <h1>Drop A Message</h1>
              <p>
                Get in touch to discuss your employee wellbeing needs today.
                Please give us a call, drop us an email or fill out the contact
                form.
              </p>
            </div>
            <div className="contact-icon-wrapper">
              <div className="connect">
                <a href="tel:+1 888-387-9278">
                  <img src={phoneIcon} alt="phone-icon" className="icon" />
                  <h4>Call</h4>
                </a>
                <div className="connect-box">
                  <p>+1123 456 7825</p>
                </div>
              </div>
              <div className="connect">
                <a href="mailto:contact@funr.io">
                  <img src={mailIcon} alt="mail-icon" className="icon" />
                  <h4>Email</h4>
                </a>
                <div className="connect-box">
                  <p>contact@funr.io</p>
                </div>
              </div>
              <div className="connect location">
                <img src={locatinIcon} alt="location-icon" className="icon" />
                <div className="connect-box location-box">
                  <h4>Address</h4>
                  <p>7660-H Fay Avenue Suite 826 La Jolla, CA. 92037-4843</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-section2-right-side">
            <form method="GET" className="contact-form">
              <div className="form-row">
                <div className="input-container">
                  <label htmlFor="firstName" className="input-label">
                    First name*
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name*"
                    required
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="lastName" className="input-label">
                    Last name*
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name*"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="input-container">
                  <label htmlFor="email" className="input-label">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="input-field"
                    name="email"
                    id="email"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="subject" className="input-label">
                    Subject*
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    name="subject"
                    id="subject"
                    placeholder="Subject*"
                    required
                  />
                </div>
              </div>
              <div className="form-row row3">
                <div className="text-container">
                <label htmlFor="message" className="input-label">Message*</label>
                <textarea name="message" id="message" rows="4" required className="input-field text-area" placeholder="Write here">
                </textarea>
                </div>
              </div>
              <button className="btn form-submit-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="home9">
        <h1>stay connected</h1>
        <div className="social-handles-wrapper">
          <Home9 />
        </div>
      </div>
    </div>
  );
};

export default Contact;
