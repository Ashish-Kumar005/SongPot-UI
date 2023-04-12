import React from "react";

const Home7VideoSection = ({ videoSrc, videoThumb, videoTitle,id }) => {
  const handleOnPlay = (val) => {
    const box = document.getElementById(val)
    box.style.visibility = "hidden";
  };

  const handleOnEnd = (val) => {
    const box = document.getElementById(val)
    box.style.visibility = "visible";
  };


  return (
    <div className="video-container">
      <div className="video-box">
        <video
          src={videoSrc}
          poster={videoThumb}
          controlsList="nodownload"
          controls
          onPlay={() => handleOnPlay(id)}
          onEnded={() => handleOnEnd(id)}
        ></video>
        <div id={`${id}`}>
        <div className="video-upper-box" >Coming Soon</div>
        <div className="video-lower-box">3rd Quarter 2023</div>
        </div>
        
      </div>
      <div className="video-title-box">
        <h4 className="video-title">{videoTitle}</h4>
      </div>
    </div>
  );
};

export default Home7VideoSection;
