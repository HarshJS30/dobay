import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/why.css';

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    centerMode: true,
  };

  return (
    <div className="carousel-container">
        <h2>Our <span>Work</span></h2>
      <Slider {...settings}>
        <div className="carousel-item">
            <div className="yt">harsh</div>
        </div>
        <div className="carousel-item">
            <div className="yt">harsh</div>
        </div>
        <div className="carousel-item">
            <div className="yt">harsh</div>
        </div>
        <div className="carousel-item">
            <div className="yt">harsh</div>
        </div>
        <div className="carousel-item">
            <div className="yt">harsh</div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
