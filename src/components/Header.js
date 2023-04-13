import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Header/Logo.png";
import NavLinks from "./NavLinks";
import { FaHamburger } from "react-icons/fa";

const Header = ({ className }) => {
  const [hamBurgerShow, setHamBurgerShow] = useState(false);

  return (
    <header className={`header ${className}`}>
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

        <div className="ham-burger">
          <button
            className="ham-burger-btn"
            onClick={() => setHamBurgerShow(!hamBurgerShow)}
          >
            <FaHamburger className="ham-burger-icon" />
          </button>
        </div>
      </div>
      {
        hamBurgerShow ?
        <div className="ham-burger-menu show navLinks" >
          <NavLink
            to={"/home"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#10BCE9",
              backgroundColor: isActive ? "#10BCE9" : "#fff",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#10BCE9",
              backgroundColor: isActive ? "#10BCE9" : "#fff",
            })}
          >
            About Us
          </NavLink>
          <NavLink
            to={"/game-unfold"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#10BCE9",
              backgroundColor: isActive ? "#10BCE9" : "#fff",
            })}
          >
            Game Unfold
          </NavLink>
          <NavLink
            to={"/announcements"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#10BCE9",
              backgroundColor: isActive ? "#10BCE9" : "#fff",
            })}
          >
            Announcements
          </NavLink>
          <NavLink
            to={"/finances"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#10BCE9",
              backgroundColor: isActive ? "#10BCE9" : "#fff",
            })}
          >
            Finances
          </NavLink>
          <NavLink
            to={"/privacy-policy"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#10BCE9",
              backgroundColor: isActive ? "#10BCE9" : "#fff",
            })}
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to={"/contact-us"}
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#10BCE9",
              backgroundColor: isActive ? "#10BCE9" : "#fff",
            })}
          >
            Contact Us
          </NavLink>
      </div> : <div className="ham-burger-menu not-show" ></div>
      }
    </header>
  );
};

export default Header;
