import React from 'react';
import Slider from 'react-slick';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerContainer = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
  };

  return (
    <div className="mt-10 overflow-hidden">
      <Slider {...settings}>
        <div><SlideOne /></div>
        <div><SlideTwo /></div>
        <div><SlideThree /></div>
      </Slider>
    </div>
  );
};

export default BannerContainer;
