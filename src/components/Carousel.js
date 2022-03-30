import { useState } from "react";
import { StyledCarousel } from "./styles/Carousel.styled";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
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
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <StyledCarousel>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </StyledCarousel>
  );
}
