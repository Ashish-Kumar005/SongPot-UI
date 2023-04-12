import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Header/Logo.png";
import NavLinks from "./NavLinks";

const Header = ({className}) => {
  return (
    <header className = {`header ${className}`}>
      <div className="nav-container">
        <Link to={"/"} className="logo-link">
          <img src={Logo} alt="Logo" className="header-logo" />
        </Link>
        <div className="nav-right-container">
        <nav className="navBar">
          <ul className="navLinks">
            <NavLinks />
          </ul>
        </nav>
        <div className="contact-btn-box">
          <Link
            to={"/contact-us"}
            className="contactBtn"
            onClick={() => (document.title = "Contact Us")}
          >
            Contact Us
          </Link>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
