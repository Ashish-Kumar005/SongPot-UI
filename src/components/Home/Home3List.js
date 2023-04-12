import React from "react";
import home3gameIcon from "../../assets/Home3/ion_game-controller (1).png";

const Home3List = ({listArr}) => {
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
