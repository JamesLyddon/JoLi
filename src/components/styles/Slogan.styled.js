import styled from "styled-components";

export const StyledSlogan = styled.div`
  position: absolute;
  top: 30vh;
  left: 10vw;
  width: 80vw;
  padding: 0;
  margin: 0;
  z-index: -2;
  text-align: center;
  h1 {
    font-weight: 400;
    font-size: 2rem;
    color: #c21807;
  }
  .passion,
  .imagination,
  .creativity {
    opacity: 0;
    animation: slogan-flash 3s ease forwards;
  }
  .passion {
    animation-delay: 1.5s;
  }
  .imagination {
    animation-delay: 1.7s;
  }
  .creativity {
    animation-delay: 1.9s;
  }

  @keyframes slogan-flash {
    0% {
      color: #333;
      filter: blur(5px);
    }
    50% {
      opacity: 1;
      color: #c21807;
      filter: blur(0);
    }
    100% {
      opactiy: 0;
      color: #333;
      filter: blur(5px);
    }
  }
`;
