import styled from "styled-components";

export const StyledCarousel = styled.div`
  opacity: 0;
  animation: fade-in 1.5s ease forwards;
  animation-delay: 1.5s;
  width: 60vw;
  margin: 0 auto;
  overflow-x: hidden;

  .slide img {
    width: 15rem;
    margin: 2rem auto;
  }

  .slide {
    transform: scale(0.2);
    transition: transform 300ms;
    opacity: 0.5;
  }

  .activeSlide {
    transform: scale(1.2);
    opacity: 1;
  }

  .arrow {
    color: #333;
    position: absolute;
    cursor: pointer;
    z-index: 10;
  }

  .arrow svg {
    transition: color 300ms;
  }

  .arrow svg:hover {
    transition: color 300ms;
    color: #c21807;
  }

  .next {
    right: 0%;
    top: 50%;
  }

  .prev {
    left: 0%;
    top: 50%;
  }
`;
