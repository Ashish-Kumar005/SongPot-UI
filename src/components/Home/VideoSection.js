import React from "react";

const VideoSection = ({ gameBox }) => {
  return <div className="game-container">{gameBox.map((element, index) => {
    return (
        <div className='game-box' key={index}>
        <img className='game-img' src={element.img} alt="Game1" />
        <h2 className='game-heading'>{element.title}</h2>
        <p className='game-description'>{element.description}</p>
        <div>
        <h3 className='game-releasedate'><span>{element.releaseDateTitle}</span>{element.releaseDate}</h3>
        </div>
    </div>
    )
  })}</div>;
};

export default VideoSection;
