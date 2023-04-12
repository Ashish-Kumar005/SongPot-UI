import React from "react";
import liIcon from "../assets/Announcement/solution 1.png";

// Carousel
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = ({ carouselContent }) => {

 

  return (
    <div className="carousel-width-container">
      <Carousel
        width={"100%"}
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={1000}
        emulateTouch={true}
        // onChange={handleChange}
      >
        {carouselContent.map((slide, index1) => {
            const img = slide.imgLink
          return (
            <div className="carousel-container" key={index1} style={{background: `url('${img}') no-repeat center/cover`}}>
              <div className={`carousel-text-container`}>
                <h3 className="carousel-heading">{slide.title}</h3>
                <div className="carousel-text-middle-container">
                  <p className="carousel-para">{slide.para1}</p>
                  <ul className="carousel-ul-list">
                    {slide.li.map((listItem, index2) => {
                      return (
                        <div className="carousel-li-container" key={index2}>
                          <img
                            src={liIcon}
                            alt="list-icon"
                            className="carousel-li-icon"
                          />
                          <li className="carousel-li-text">
                            {listItem}
                          </li>
                        </div>
                      );
                    })}
                  </ul>
                  <p className="carousel-para">{slide.para2}</p>
                </div>
                <button className="btn coming-soon-btn">{slide.btnText}</button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
