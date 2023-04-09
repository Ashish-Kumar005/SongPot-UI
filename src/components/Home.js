import React from "react";
import Home2 from "./Home2";
import Home3List from "./Home3List";
import Home4Section from "./Home4Section";
import VideoSection from "./VideoSection";
import Home9 from "./Home9";
import QuestionAndAnswer from "./QuestionAndAnswer";
import Games from "./Games";

// images
import image4 from "../assets/Home/image 4.png";
import home3Funr from "../assets/Home3/Rectangle 90.png";
import home3Quickee from "../assets/Home3/game 4.png";
import home4Game5 from "../assets/Home4/game 5.png";
import home4Game6 from "../assets/Home4/game 6.png";
import home4LowerGame5 from "../assets/Home4/lower game 5.png";
import home4LowerGame6 from "../assets/Home4/lower game 6.png";
// home5
import rainGame from "../assets/Home5/rain game image 1.png";
import quickeeGame from "../assets/Home5/Rectangle 60.png";
import songPotGame from "../assets/Home5/song-pot-img.png";
// home6

// home8
import songPortLoadingWallpaper from "../assets/Home8/Rectangle 8.png";
import quickeeLoadingWallpaper from "../assets/Home8/Rectangle 9.png";
import leftGameIcon from "../assets/Home8/Vector-1.png";
import rightGameIcon from "../assets/Home8/Vector.png";


// video
import pandaVideo from "../assets/Home5/panda-video.mp4";

const Home = () => {
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
  return (
    <div>
      {/* Home1 */}
      <div className="home1">
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
            <button className="home1-left-btn">View More</button>
          </div>
        </div>
        <div className="home1-right-side">
          <img src={image4} alt="gameImage" />
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
          <img src={home3Quickee} alt="Quickee" />
          <img src={home3Funr} alt="FUNR" className="home3-funrImage" />
        </div>

        {/* right-side */}
        <div className="home3-right-side">
          <h1 className="home3-right-heading">
            <span>funr</span> games. common denominators:
          </h1>
          <div className="home3-right-list">
            <Home3List />
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

          <Home4Section textSection={home4LowerRightSection} />
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
        <div className="home6-container">
          <Games/>
        </div>
      </div>

      {/* HOME7 */}
      {/* <div className="home7">
        <h1>Home7</h1>
      </div> */}

      {/* HOME8 */}
      <div className="home8">
        <img src={leftGameIcon} alt="left-game-icon" />
        <div className="home8-container">
          <div>
            <img src={songPortLoadingWallpaper} alt="songPort-loading-screen" />
          </div>
          <div className="home8-game-text-wrapper">
            <h2 className="home8-game-heading">FUNR Games are games of skill.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Nisi sodales sed urna
              tristique. Dui elit felis mauris est quam etiam. Pretium interdum
              ultrices mauris ligula tincidunt gravida vitae. Tristique tempor
              vulputate diam pellentesque.
            </p>
            <button className="btn read-more-btn">Read More</button>
          </div>
          <div className="quickee-loading-wallpaper">
            <img src={quickeeLoadingWallpaper} alt="quickee-loading-screen" />
          </div>
        </div>
        <img src={rightGameIcon} alt="right-game-icon" />
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
          <QuestionAndAnswer />
          <QuestionAndAnswer />
          <QuestionAndAnswer />
          <QuestionAndAnswer />
          <QuestionAndAnswer />
          <QuestionAndAnswer />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
