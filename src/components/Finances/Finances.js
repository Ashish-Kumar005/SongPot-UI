import React from "react";
import TopSection from "../TopSection";
import financeBrand from "../../assets/Finances/Group 8791.png";
import Home4Section from "../Home/Home4Section";

// images
import songPotReleaseImg from '../../assets/Finances/realeased-game-songpot-ing.png'
import songPotSS from '../../assets/Finances/songpot-screenshot-img.png'
import quickeebg from '../../assets/Finances/quickee-slide-background-img.png'
import songPotbg from '../../assets/Finances/songpot-background-img.png'
import Home3List from "../Home/Home3List";

const Finance = () => {
  document.title = "Finances"
  const financeSection3 = [
    {
      title: `FUNR Games are the company’s “Slot Machines”.`,
      subHeading: `Dooplo is a unique cryptogames providing pleasant pastime. We offer our members to play Provably Fair games and some bonus games, join contests, achieve various awards.`,
      description: `Our service is strongly user-oriented which is manifested in carefully designed UI, proactive support, low House Edge, and transparent withdrawal principles.`,
      color : `color`,
      hidden: `hidden`,
    },
  ];

  const financeSection2 = [
    `FUNR business model: Pay to play games. Prize to win.`,
    `FUNR Games are the company’s “Slot Machines”.`,
    "Each game designed to generate revenue to support company operations and turn a profit.",
    "FUNR Games are being designed and developed so they can be played on cross platforms.",
  ]

  return (
    <div>
      <TopSection title={"Finances"} />

      <div className="finance-section2">
        <div className="finance-section2-left-side">
            <img src={songPotReleaseImg} className="songPot-release" alt="song-pot-release-game" />
            <img src={songPotSS} className="songPot-screenshot" alt="song-pot-screenshot" />
        </div>
        <div className="finance-section2-right-side">
          <h1>Investor Link:</h1>
          <Home3List listArr={financeSection2}/>
        </div>
      </div>

      <div className="finance-section3">
        <div className="finance-section3-container">
        <div>
          <Home4Section textSection={financeSection3} />
        </div>
        <div className="finance-section3-right-container">
          <img src={quickeebg} className="quickee-bg" alt="Quickee-background" width="600" height="334" />
          <img src={songPotbg} className="song-pot-bg" alt="Songpot-background" height="300"/>
        </div>
        </div>
      </div>
      <div className="finance-section4">
        <img src={financeBrand} alt="finance-brand-logo" />
      </div>
    </div>
  );
};

export default Finance;
