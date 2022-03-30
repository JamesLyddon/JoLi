import styled from "styled-components";

export const StyledSlogan = styled.div`
  opacity: 0;
  position: absolute;
  z-index: -2;
  font-size: 1.2rem;
  text-align: center;
  margin: 0 auto;
  animation: fade-in 1.5s ease forwards;
  animation-delay: 1.5s;
  h1 {
    font-weight: 400;
    font-size: 6rem;
    color: #333;
    opacity: 0.4;
  }
`;
