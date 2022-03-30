import { useState } from "react";
import Slider from "react-slick";
import media_player from "../assets/media_player.svg";
import online_media from "../assets/online_media.svg";
import video_files from "../assets/video_files.svg";
import video_influencer from "../assets/video_influencer.svg";
import videographer from "../assets/videographer.svg";
import web_search from "../assets/web_search.svg";

const images = [
  media_player,
  online_media,
  video_files,
  video_influencer,
  videographer,
  web_search,
];

export default function Carousel() {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
  };

  return (
    <Slider>
      {images.map((img, i) => (
        <div>
          <img src={img} alt={img} width="200" />
        </div>
      ))}
    </Slider>
  );
}
