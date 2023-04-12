import React from "react";
import ratingStars from "../../assets/Home6/Group 8780.png";
import { HashLink } from "react-router-hash-link";

const GameSectionLeftSide = ({game}) => {
  return (
    <>
      {game.map((item, index) => {
        return (
          <div className="home6-left-side" key={index} >
            <div>
              <img src={item.img} alt={item.heading} className="home6-left-img"/>
            </div>
            <div className="home6-left-text-wrapper">
              <div className="game-name-container">
                <h3 className="home6-game-name">{item.heading}</h3>
              </div>
              <div className="rating">
                <h4>Rating :</h4>
                <img src={ratingStars} alt="rating-stars" />
              </div>
              <div className="features">
                <div className="features-list">
                  <h4>{item.categoryHeading}</h4>
                  <p>{item.categoryDescripton}</p>
                </div>
                <div className="features-list">
                  <h4>{item.modelHeading}</h4>
                  <p>{item.modelDescription}</p>
                </div>
                <div className="features-list">
                  <h4>{item.controllerHeading}</h4>
                  <p>{item.controllerDescription}</p>
                </div>
              </div>
              <div className="short-description">
                <p>{item.shortDescription}</p>
              </div>
              <HashLink to={"/game-unfold"}>
                <button className="download-btn btn">Download Now</button>
              </HashLink>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GameSectionLeftSide;
