import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StyledCarousel } from "./styles/Carousel.styled";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import broadcastTv from "../assets/broadcastTv.svg";
import videoOnDemand from "../assets/videoOnDemand.svg";
import onlinePromo from "../assets/onlinePromo.svg";
import cinema from "../assets/cinema.svg";

const images = [broadcastTv, cinema, onlinePromo, videoOnDemand];

const blurbs = ["Broadcast TV", "Cinema", "Online Promo", "Video On Demand"];

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
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    infinite: true,
    lazyLoad: true,
    speed: 1000,
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
          <div
            key={uuidv4}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img src={img} alt={img} />
            <span className="blurbs">{blurbs[idx]}</span>
          </div>
        ))}
      </Slider>
    </StyledCarousel>
  );
}
