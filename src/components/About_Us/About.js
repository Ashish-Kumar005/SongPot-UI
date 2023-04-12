import React from "react";
import { Link } from "react-router-dom";
import Home2 from "../Home/Home2";
import LogoSection from "../LogoSection";
import section4rightImg from "../../assets/About/Group.png";
import TopSection from "../TopSection";

const About = () => {
  document.title = "About Us";
  return (
    <div id="about">
      {/* section1 */}
      <TopSection title={"About Us"}/>

      {/* section2 */}
      <div className="about-section2">
        <Home2 />
      </div>

      {/* section3 */}
      <div className="about-section3">
        <div className="section3-right-side">
          <h1>Discover FUNR Games</h1>
          <div className="section3-text-wrap">
            <p>
              Here are the content from the client to be added in the website
              FUNR is a publicly traded company (ticker symbol FUNR) based in La
              Jolla, CA. FUNR specializes in games of skill with a thematic of
              "pay to play and prize to win." FUNR also develops Saas and PaaS
              Software as a Service and Platform as a Service.
            </p>
            <Link to={"/game-unfold"}>
              <button className="btn view-games-btn">View Games</button>
            </Link>
          </div>
        </div>
      </div>

      {/* section4 */}
      <div className="about-section4">
        <div className="section4-container">
          <div className="section4-left-side">
            <h1>Playing games winning instant cash and Bonus</h1>
            <p>
              We create the most epic interactive gaming and entertainment
              experiences. Our platforms immerse players in new, unimagined
              worlds and offer countless ways to play within them. We build
              communities that bring people together with purpose and belonging.
              There is something for everyone. It takes heroes to make heroes,
              and our employees, across Activision, Blizzard
            </p>
          </div>
          <div className="section4-right-side">
            <img src={section4rightImg} alt="right-img" />
          </div>
        </div>
      </div>

      {/* Logo-Section */}
      <div className="logoSection-container">
        <LogoSection />
      </div>
    </div>
  );
};

export default About;
