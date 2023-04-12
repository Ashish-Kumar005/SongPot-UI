import React, { useState } from "react";
import "../../styles/Home.css";
import GameSectionLeftSide from "./GameSectionLeftSide";
import songPotWallpaper from "../../assets/Home6/Rectangle 57 (1).png";
import quickeeImage from '../../assets/Home6/quickee-image.png'
import rainGameImage from '../../assets/Home6/rain-game-image.png'
import seinFeldImage from '../../assets/Home6/sainfeld-image.png'

const Games = () => {
  const [displayGame, setDisplayGame] = useState(4);

  const games = [
    {
      id: 1,
      addClass: `game1`,
      title: `Quickee`,
    },
    {
      id: 2,
      addClass: `game2`,
      title: `Rain Game`,
    },
    {
      id: 3,
      addClass: `game3`,
      title: `Seinfeld Said`,
    },
    {
      id: 4,
      addClass: `game4`,
      title: `Song Pot`,
    },

  ];

  const gameDescription1 = [
      {
          img: `${quickeeImage}`,
          heading : `Quickee`,
          categoryHeading : `Category`,
          categoryDescripton : `Virtual Game`,
          modelHeading : `Model`,
          modelDescription : `Compete 50 Platers`,
          controllerHeading : `Controller`,
          controllerDescription : `PlayStation 5, Xbox, PS4`,
          shortDescription : `Mauris cursus mattis molestie a iaculis at erat pellentesque. Convallis posuere morbi leo urna molestie at elementum eu. Justo donec enim diam vulputate. Pretium nibh ipsum consequat nisl. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Mi bibendum neque egestas congue quisque.`,
      },
  ]

  const gameDescription2 = [
    {
        img: `${rainGameImage}`,
        heading : `Rain Game`,
        categoryHeading : `Category`,
        categoryDescripton : `Virtual Game`,
        modelHeading : `Model`,
        modelDescription : `Compete 50 Platers`,
        controllerHeading : `Controller`,
        controllerDescription : `PlayStation 5, Xbox, PS4`,
        shortDescription : `Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Pellentesque sit amet porttitor eget dolor morbi non arcu. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Placerat vestibulum lectus mauris ultrices eros in cursus. Neque aliquam vestibulum morbi.`,
    }
]
    const gameDescription3 = [
        {
            img: `${seinFeldImage}`,
            heading : `Seinfeld Said`,
            categoryHeading : `Category`,
            categoryDescripton : `Virtual Game`,
            modelHeading : `Model`,
            modelDescription : `Compete 50 Platers`,
            controllerHeading : `Controller`,
            controllerDescription : `PlayStation 5, Xbox, PS4`,
            shortDescription : `Mauris cursus mattis molestie a iaculis at erat pellentesque. Convallis posuere morbi leo urna molestie at elementum eu. Justo donec enim diam vulputate. Pretium nibh ipsum consequat nisl. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Mi bibendum neque egestas congue quisque.`
        }
    ]
    const gameDescription4 = [
        {
            img: `${songPotWallpaper}`,
            heading : `Song Pot`,
            categoryHeading : `Category`,
            categoryDescripton : `Virtual Game`,
            modelHeading : `Model`,
            modelDescription : `Compete 50 Platers`,
            controllerHeading : `Controller`,
            controllerDescription : `PlayStation 5, Xbox, PS4`,
            shortDescription : `Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Pellentesque sit amet porttitor eget dolor morbi non arcu. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Placerat vestibulum lectus mauris ultrices eros in cursus. Neque aliquam vestibulum morbi.`
        },
    ]

    
  return (
    <>
      {displayGame === 1 ? <GameSectionLeftSide game = {gameDescription1} /> : displayGame === 2 ? <GameSectionLeftSide game = {gameDescription2} /> : displayGame === 3 ? <GameSectionLeftSide game = {gameDescription3}/> : <GameSectionLeftSide game = {gameDescription4}/>}
      <div className="home6-right-side">
        {games.map((game, index) => {
          return (
            <button
              key={index} title="Click For Expand"
              className="game-section-list"
              onClick={() => {setDisplayGame(game.id)}}
            >
              <div className={`game-list ${game.addClass}`}>
                <p>{game.title}</p>
              </div>
            </button>
           
          );
        })}
      </div>
      
    </>
  );
};

export default Games;
