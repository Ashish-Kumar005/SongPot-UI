import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import rightArrow from "../assets/Footer/Vector (4).png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section1">
        <div className="footer-wrapper">
          <div className="footer-about-us-section">
            <h3>About Us</h3>
            <p>
              FUNR is a publicly traded company (ticker symbol FUNR) based in La
              Jolla, CA. FUNR specializes in games of skill with a thematic of
              "pay to play and prize to win." FUNR also develops Saas and PaaS
              Software as a Service and Platform as a Service.
            </p>
            <div className="email-box">
              <input type="email" placeholder="Enter Email" required />
              <Link to={"/contact"}>
                <img src={rightArrow} alt="right-arrow" />
              </Link>
            </div>
          </div>
          <div className="footer-column">
            <FooterColumn />
            <FooterColumn />
          </div>
          <div className="footer-contact-section">
            <div>
              <h4>Call</h4>
              <p>+1123 456 7825</p>
            </div>
            <div>
              <h4>Email Address</h4>
              <p>info@example.com</p>
            </div>
            <div>
              <h4>Company Address</h4>
              <p>56 Union Terrace LOCKLEYWOODTF9 2SQ</p>
            </div>
          </div>
        </div>
        <div className="horizontal-line"></div>
      </div>
      <div className="copyright-section">
        <p>
          Copyright &copy; 2023 <span>FUNR Games.</span> all right reserved. |{" "}
        </p>
        <HashLink to={"/privacy-policy/#privacy"}>Privacy Policy</HashLink>
      </div>
    </footer>
  );
};

const FooterColumn = () => {
  return (
    <div className="footer-column-container">
      <h3>Explore</h3>
      <div className="footer-links">
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/about/#about"}>About Us</HashLink>
        <HashLink to={"/game-unfold/#game-unfold"}>Game Unfold</HashLink>
        <HashLink to={"/announcements/#announcement"}>Announcements</HashLink>
        <HashLink to={"/finances/#finances"}>Finances</HashLink>
        <HashLink to={"/privacy-policy/#privacy"}>Privacy Policy</HashLink>
        <HashLink to={"/contact-us/#contact-us"}>Contact Us</HashLink>
      </div>
    </div>
  );
};

export default Footer;
