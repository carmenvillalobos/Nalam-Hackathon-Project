import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 15000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="GoldenGateBridge-001.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="GoldenGateBridge-001.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="GoldenGateBridge-001.jpg" alt="Slide 3" />
      </div>
    </Slider>

  );
};

export default Slideshow;