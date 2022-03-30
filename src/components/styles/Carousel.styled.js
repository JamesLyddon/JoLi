import styled from "styled-components";

export const StyledCarousel = styled.div`
  opacity: 0;
  animation: fade-in 1.5s ease forwards;
  animation-delay: 5s;
  font-size: 1.5rem;
  padding: 4rem 6rem;
  overflow-x: hidden;
  text-align: center;
  font-style: italic;

  .slide img {
    height: 20vh;
    margin: 2rem auto;
  }

  .slide {
    transform: scale(0.5);
    transition: transform 300ms;
    opacity: 0.1;
  }

  .activeSlide {
    transform: scale(1);
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
