import React from "react";
import Header from "../Header";
import Home2 from "./Home2";
import Home3List from "./Home3List";
import Home4Section from "./Home4Section";
import VideoSection from "./VideoSection";
import Home9 from "./Home9";
import QuestionAndAnswer from "./QuestionAndAnswer";
import Games from "./Games";
import LogoSection from "../LogoSection";

// images../
import image4 from '../../assets/Home/FUNR-logo-svg.svg'
import home3Funr from "../../assets/Home3/Rectangle 90.png";
import home3Quickee from "../../assets/Home3/game 4.png";
import home4Game5 from "../../assets/Home4/game 5.png";
import home4Game6 from "../../assets/Home4/game 6.png";
import home4LowerGame5 from "../../assets/Home4/lower game 5.png";
import home4LowerGame6 from "../../assets/Home4/lower game 6.png";
// home5
import rainGame from "../../assets/Home5/rain game image 1.png";
import quickeeGame from "../../assets/Home5/Rectangle 60.png";
import songPotGame from "../../assets/Home5/song-pot-img.png";
// home7
import video1 from '../../assets/Home7/istockphoto-1195232384-640_adpp_is.mp4'
import video1Thumb from '../../assets/Home7/Rectangle 64.png'

// home8
import songPortLoadingWallpaper from "../../assets/Home8/Rectangle 8.png";
import quickeeLoadingWallpaper from "../../assets/Home8/Rectangle 9.png";
import leftGameIcon from "../../assets/Home8/Vector-1.png";
import rightGameIcon from "../../assets/Home8/Vector.png";


// video
import pandaVideo from "../../assets/Home5/panda-video.mp4";
import { HashLink } from "react-router-hash-link";
import Home7VideoSection from "./Home7VideoSection";

import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import MediaCarousel from "../MediaCarousel";


const Home = () => {
  document.title = "Home "

  // home3

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
  // home4
  const home4UpperLeftSection = [
    {
      title: `Quickee`,
      subHeading: `FUNR Games Management (FGM) used A. I. to make a better “Wordle-like” game.FGM added:`,
      description: `Lorem ipsum dolor sit amet consectetur. Nisi elementum sem iaculis egestas enim diam. Amet lacus quam vulputate enim lacus tempus sagittis. Mattis dignissim ac varius eu vehicula velit. Amet in diam vel sapien tempus. Nunc fermentum elementum vulputate rhoncus elit mattis lorem posuere.`,
      btn: `Learn More`,
    },
  ];

  const home4LowerRightSection = [
    {
      title: `SongPot`,
      subHeading: `FUNR Games Management has taken a line from a song and spread it all over agame board. Descramble the song verse and win a game prize.`,
      description: `Lorem ipsum dolor sit amet consectetur. Nisi elementum sem iaculis egestas enim diam. Amet lacus quam vulputate enim lacus tempus sagittis. Mattis dignissim ac varius eu vehicula velit. Amet in diam vel sapien tempus. Nunc fermentum elementum vulputate rhoncus elit mattis lorem posuere.`,
      btn: `Learn More`,
    },
  ];

  // home5
  const gameBox = [
    {
      img: `${rainGame}`,
      title: `Rain Game`,
      description: `A visual word puzzle explosion with movie trivia.`,
      releaseDateTitle: `Estimated Release Date:`,
      releaseDate: `June/July 2023`,
    },
    {
      img: `${quickeeGame}`,
      title: `Quickee`,
      description: `Think Wordle but with a multiplayer option and other improvements.`,
      releaseDateTitle: `Estimated Release Date:`,
      releaseDate: `June/July 2023`,
    },
    {
      img: `${songPotGame}`,
      title: `Song Pot`,
      description: `Song trivia word puzzle experience.`,
      releaseDateTitle: `Estimated Release Date:`,
      releaseDate: `June/July 2023`,
    },
  ];

  // QnA Array
  const questionsAnswersArray = [
    {
      qus: `How to download the game ?`,
      ans: `Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Sed
      tempus urna et pharetra pharetra. Diam quam nulla portor massa id
      neque aliquam vlum morbi. Amet nulla facilisi morbi tempus iaculis
      urna id.`,
    },
  ];
  return (
    <div>
      {/* Home1 */}
      <div className="home1">
      <Header className = "home-header"/>
        <div className="home1-container">
          <div className="home1-left-side">
            <div className="headings">
              <p className="left-welcome-heading">Welcome To FUNR Games</p>
              <h1 className="left-main-heading">
                Pay to play games, <br /> Prize to win.
              </h1>
              <p className="left-para">
                Mauris augue neque gravida in fermentum. Convallis aenean et
                tortor at risus viverra adipiscing. Vitae justo eget magna
                fermentum.
              </p>
            </div>
            <div>
              <HashLink to = {'/contact-us/#contact-us'}><button className="home1-left-btn">View More</button></HashLink>
            </div>
          </div>
          <div className="home1-right-side">
            <img src={image4} alt="gameImage" />
          </div>
        </div>
      </div>

      {/* Home2 */}
      <div className="home2">
        <Home2 />
      </div>

      {/* Home3 */}
      <div className="home3">
        {/* left-side */}
        <div className="home3-left-side">
          <img src={home3Quickee} alt="Quickee" className="home3-quickeeImage" />
          <img src={home3Funr} alt="FUNR" className="home3-funrImage" />
        </div>

        {/* right-side */}
        <div className="home3-right-side">
          <h1 className="home3-right-heading">
            <span>funr</span> games. common denominators:
          </h1>
          <div className="home3-right-list">
            <Home3List listArr = {listArr}/>
          </div>
        </div>
      </div>

      {/* Home4 */}
      <div className="home4">
        {/* UPPER-SECTION */}
        <div className="home4-upper-section">
          <Home4Section textSection={home4UpperLeftSection} />
          <div className="upper-right-side">
            <img className="img1" src={home4Game5} alt="game6" />
            <img className="img2" src={home4Game6} alt="game6" />
          </div>
        </div>

        {/* LOWER-SECTION */}
        <div className="home4-lower-section">
          <div className="lower-left-section">
            <img src={home4LowerGame5} alt="Game5" className="lower-game5" />
            <img src={home4LowerGame6} alt="Game6" className="lower-game6" />
          </div>

          <Home4Section textSection={home4LowerRightSection} className = 'home4-lower-text-wrapper' />
        </div>
      </div>

      {/* HOME5 */}
      <div className="home5">
        <div className="home5-left-side">
          <video className="panda" src={pandaVideo} controls muted loop></video>
        </div>
        <div className="home5-right-side">
          <VideoSection gameBox={gameBox} />
        </div>
      </div>

      {/* HOME6 */}
      <div className="home6">
        <h1 className="home6-heading">Released Games</h1>
        <div className="home6-carousel-container">
          <MediaCarousel/>
          </div>
        <div className="home6-container">
        <Games />
        </div>
        
      </div>

      {/* HOME7 */}

      <div className="home7">
        <div className="home7-container">
          <h1>Upcoming Games</h1>
          <div className="home7-video-section">
            <Home7VideoSection videoSrc = {video1} videoTitle = 'Cocain Panda' videoThumb={video1Thumb} id = {1}/>
            <Home7VideoSection videoSrc = {video1} videoTitle = 'Cocain Panda'  videoThumb={video1Thumb} id = {2}/>
          </div>
        </div>
      </div>

      {/* HOME8 */}
      <div className="home8">
        <img src={leftGameIcon} alt="left-game-icon" className="left-game-icon" />
        <div className="home8-container">
          <div>
            <img src={songPortLoadingWallpaper} alt="songPot-loading-screen" className="home8-songPot-screen"/>
          </div>
          <div className="home8-game-text-wrapper">
            <h2 className="home8-game-heading">FUNR Games are games of skill.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi sodales sed urna
              tristique. Dui elit felis mauris est quam etiam. Pretium interdum
              ultrices mauris ligula tincidunt gravida vitae. Tristique tempor
              vulputate diam pellentesque.
            </p>
            <HashLink to={'/game-unfold'}>
            <button className="btn read-more-btn">Read More</button>
            </HashLink>
          </div>
          <div className="quickee-loading-wallpaper">
            <img src={quickeeLoadingWallpaper} alt="quickee-loading-screen" className="home8-quickee-screen"/>
          </div>
        </div>
        <img src={rightGameIcon} alt="right-game-icon" className="right-game-icon"/>
      </div>

      {/* HOME9 */}
      <div className="home9">
        <h1>stay connected</h1>
        <div className="social-handles-wrapper">
        <Home9 />
        </div>
      </div>

      {/* HOME10 */}
      <div className="home10">
        <div className="qna-container">
        <h1>question & answers</h1>
        <div>
          <QuestionAndAnswer  questionsAnswersArray={questionsAnswersArray}/>
          <QuestionAndAnswer  questionsAnswersArray={questionsAnswersArray}/>
          <QuestionAndAnswer  questionsAnswersArray={questionsAnswersArray}/>
        </div>
        </div>
      </div>

      {/* LogoSection */}
      <div className="logoSection-container">
        <LogoSection />
      </div>
    </div>
  );
};

export default Home;
