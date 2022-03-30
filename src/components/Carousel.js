import { useState } from "react";
import { StyledCarousel } from "./styles/Carousel.styled";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import broadcast_tv from "../assets/broadcast_tv.svg";
import video_on_demand from "../assets/video_on_demand.svg";
import video_influencer from "../assets/video_influencer.svg";
import videographer from "../assets/videographer.svg";

const images = [broadcast_tv, videographer, video_influencer, video_on_demand];

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
    autoPlay: true,
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
            <span>{blurbs[idx]}</span>
          </div>
        ))}
      </Slider>
    </StyledCarousel>
  );
}
