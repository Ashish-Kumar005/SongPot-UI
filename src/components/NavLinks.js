import React from "react";
import { NavLink } from "react-router-dom";
// import gameIcon from '../assets/Header/ion_game-controller.png'
// import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to={"/home"}
        style={({isActive})=>({
            color: isActive ? "#f8be17" : "#fff",
        })}
      >
        Home
      </NavLink>
      <NavLink to={"/about"} style={({isActive})=>({
            color: isActive ? "#f8be17" : "#fff",
        })}>About Us</NavLink>
      <NavLink to={"/game-unfold"} style={({isActive})=>({
            color: isActive ? "#f8be17" : "#fff",
        })}>Game Unfold</NavLink>
      <NavLink to={"/announcements"} style={({isActive})=>({
            color: isActive ? "#f8be17" : "#fff",
        })}>Announcements</NavLink>
      <NavLink to={"/finances"} style={({isActive})=>({
            color: isActive ? "#f8be17" : "#fff",
        })}>Finances</NavLink>
      <NavLink to={"/privacy-policy"} style={({isActive})=>({
            color: isActive ? "#f8be17" : "#fff",
        })}>Privacy Policy</NavLink>
    </>
  );
};

export default NavLinks;
