import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Video } from './Video';
import './Slider.css';
import { SquareArrow } from './SquareArrow';

export const VideoSlider = () => {
  const videoUrls = [
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225",
    "https://player.vimeo.com/video/824804225"
  ];

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SquareArrow direction="next" />,
    prevArrow: <SquareArrow direction="prev" />,
  };

  return (
    <div>
      <Slider {...settings}>
        {videoUrls.map((url, index) => (
          <div key={index}> 
            <Video title={index} url={url} />
          </div>
        ))}
      </Slider>
    </div>
  );
};


