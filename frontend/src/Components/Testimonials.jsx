import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/why.css';
import vid1 from '../assets/videos/sample1.mp4';
import vid2 from '../assets/videos/sample_2.mp4';
import vid3 from '../assets/videos/sample_3.mp4';
import vid4 from '../assets/videos/sample_4.mp4';
import vid5 from '../assets/videos/sample_5.mp4';
import vid6 from '../assets/videos/sample_6.mp4';
import vid7 from '../assets/videos/sample.mp4';
const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: false,
    centerMode: true,
  };

  return (
    <div className="carousel-container">
      <h2>Our <span>Work</span></h2>
      <Slider {...settings}>
        <div className="carousel-item">
          <video src={vid1} autoPlay loop muted width="100%" height="auto">
            Your browser does not support the video tag.
          </video>
          <div className="yt">harsh</div>
        </div>
        <div className="carousel-item">
          <video src={vid2} autoPlay loop muted width="100%" height="auto">
            Your browser does not support the video tag.
          </video>
          <div className="yt">harsh</div>
        </div>
        <div className="carousel-item">
          <video src={vid3} autoPlay loop muted width="100%" height="auto">
            Your browser does not support the video tag.
          </video>
          <div className="yt">harsh</div>
        </div>
        <div className="carousel-item">
          <video src={vid4} autoPlay loop muted width="100%" height="auto">
            Your browser does not support the video tag.
          </video>
          <div className="yt">harsh</div>
        </div>
        <div className="carousel-item">
          <video src={vid5} autoPlay loop muted width="100%" height="auto">
            Your browser does not support the video tag.
          </video>
          <div className="yt">harsh</div>
        </div>
        <div className="carousel-item">
          <video src={vid6} autoPlay loop muted width="100%" height="auto">
            Your browser does not support the video tag.
          </video>
          <div className="yt">harsh</div>
        </div>
        <div className="carousel-item">
          <video src={vid7} autoPlay loop muted width="100%" height="auto">
            Your browser does not support the video tag.
          </video>
          <div className="yt">harsh</div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;