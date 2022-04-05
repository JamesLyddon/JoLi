import styled from "styled-components";

export const StyledStudio = styled.div`
  margin: 0 auto;
  width: 80vw;

  img {
    position: relative;
    z-index: -3;
    width: 100%;
    animation: fade-in 1.5s ease forwards;
    margin-top: 1rem;
    box-shadow: 3px 3px 0px #c21807;
  }
`;
