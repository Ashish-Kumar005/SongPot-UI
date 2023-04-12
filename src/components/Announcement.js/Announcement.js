import React from "react";
import TopSection from "../TopSection";
// panda video
import pandaVideo from "../../assets/Home5/panda-video.mp4";
import ImageSlider from "../ImageSlider";
// image



const Announcement = () => {
  document.title = "Announcements";

  const carouselCocainPandaContent = [
    {
      imgLink : `./Carousel_Images/cocain-panda.png`,
      title : `Cocaine Panda. Adults Only.`,
      para1 : `Panda goes berserk and embarks on rampage`,
      li : [`Continuous Challenge`,`Flexibility`,`Immediate, useful rewards`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
    {
      imgLink : `./Carousel_Images/cocain-panda.png`,
      title : `Cocaine Panda. Adults Only.`,
      para1 : `Panda goes berserk and embarks on rampage`,
      li : [`Continuous Challenge`,`Flexibility`,`Immediate, useful rewards`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
    {
      imgLink : `./Carousel_Images/cocain-panda.png`,
      title : `Cocaine Panda. Adults Only.`,
      para1 : `Panda goes berserk and embarks on rampage`,
      li : [`Continuous Challenge`,`Flexibility`,`Immediate, useful rewards`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
  ]  

  const carouselSeinFeldContent = [
    {
      imgLink : `./Carousel_Images/quickee-slide-background-img (1).png`,
      title : `Seinfeld Said`,
      para1 : `FUNR Games Management takes the best lines from Seinfeld and scrambledthem all over a game board.`,
      li : [`Descramble the line.`,`Figure out who said the line.`,`Then tell us the Seinfeld episode it came from.`,`Do this first and win the game prize.`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
    {
      imgLink : `./Carousel_Images/quickee-slide-background-img (1).png`,
      title : `Seinfeld Said`,
      para1 : `FUNR Games Management takes the best lines from Seinfeld and scrambledthem all over a game board.`,
      li : [`Descramble the line.`,`Figure out who said the line.`,`Then tell us the Seinfeld episode it came from.`,`Do this first and win the game prize.`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
    {
      imgLink : `./Carousel_Images/quickee-slide-background-img (1).png`,
      title : `Seinfeld Said`,
      para1 : `FUNR Games Management takes the best lines from Seinfeld and scrambledthem all over a game board.`,
      li : [`Descramble the line.`,`Figure out who said the line.`,`Then tell us the Seinfeld episode it came from.`,`Do this first and win the game prize.`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
  ]

  const carouselRainGameContent = [
    {
      imgLink : ``,
      title : `Rain Game`,
      para1 : `A visual word puzzle explosion with movie trivia.`,
      li : [`Descramble the line.`,`Figure out who said the line.`,`Then tell us the Seinfeld episode it came from.`,`Do this first and win the game prize.`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
    {
      imgLink : ``,
      title : `Rain Game`,
      para1 : `A visual word puzzle explosion with movie trivia.`,
      li : [`Descramble the line.`,`Figure out who said the line.`,`Then tell us the Seinfeld episode it came from.`,`Do this first and win the game prize.`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
    {
      imgLink : ``,
      title : `Rain Game`,
      para1 : `A visual word puzzle explosion with movie trivia.`,
      li : [`Descramble the line.`,`Figure out who said the line.`,`Then tell us the Seinfeld episode it came from.`,`Do this first and win the game prize.`],
      para2 : `Estimated Release Date: 3rd Quarter 2023`,
      btnText : `Coming Soon`
    },
  ]

  return (
    <div>
      <TopSection title={"Announcement"} />

      <div className="announcement-section2">
        <ImageSlider carouselContent = {carouselCocainPandaContent}/>
      </div>
      <div className="announcement-section3">
        <div className="video-section">
          <video
            src={pandaVideo}
            autoPlay
            muted
            loop
            className="panda-video"
          ></video>
        </div>
      </div>
      <div className="announcement-section4">
        <ImageSlider carouselContent = {carouselSeinFeldContent}/>
      </div>
      <div className="announcement-section5">
        <ImageSlider carouselContent = {carouselRainGameContent}/>
      </div>
    </div>
  );
};

export default Announcement;
