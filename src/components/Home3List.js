import React from "react";
import home3gameIcon from "../assets/Home3/ion_game-controller (1).png";

const Home3List = () => {
  const listArr = [
    `Each game requires a fee to play that day’s game.`,
    "Game Prize to game winner.",
    "Game clock.",
    "Game start time",
    "Game clues.",
    "Multiplayer options on certain games.",
    "Spectator features.",
    "Player feedback.",
    "Live player lists.",
    "And many more future features.",
  ];
  return (
    <>
      {listArr.map((item, index) => {
        return (
          <div className="home3-right-list-element" key={index}>
            <img src={home3gameIcon} alt="controller" />
            <p className="home3-list-item">{item}</p>
          </div>
        );
      })}
    </>
  );
};

export default Home3List;
