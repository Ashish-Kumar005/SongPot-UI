import React from "react";
// home9
import facebookIcon from "../../assets/Home9/Vector.png";
import instagramIcon from "../../assets/Home9/Vector-1.png";
import twitterIcon from "../../assets/Home9/Vector-2.png";
import youtubeIcon from "../../assets/Home9/Vector-3.png";
import twitchIcon from "../../assets/Home9/Vector-4.png";
import discordIcon from "../../assets/Home9/Vector-5.png";

const Home9 = () => {
  const socialHandles = [
    {
      img: `${facebookIcon}`,
      handleName: `facebook`,
    },
    {
      img: `${instagramIcon}`,
      handleName: `instagram`,
    },
    {
      img: `${twitterIcon}`,
      handleName: `twitter`,
    },
    {
      img: `${youtubeIcon}`,
      handleName: `youtube`,
    },
    {
      img: `${twitchIcon}`,
      handleName: `twitch`,
    },
    {
      img: `${discordIcon}`,
      handleName: `discord`,
    },
  ];
  return (
    <>
      {socialHandles.map((socialHandle, index) => {
        return (
          <div className="box" key={index}>
            <img src={socialHandle.img} alt={socialHandle.handleName} />
            <h3>{socialHandle.handleName}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Home9;
