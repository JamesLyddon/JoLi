import styled from "styled-components";

export const StyledSlogan = styled.div`
  position: absolute;
  z-index: -2;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  ${
    "" /* animation: flash 3s ease forwards;
  animation-delay: 2s; */
  }
  h1 {
    font-weight: 200;
    font-size: 4rem;
    color: #c21807;
  }
  .passion,
  .imagination,
  .creativity {
    opacity: 0;
    animation: flash 3s ease forwards;
  }
  .passion {
    animation-delay: 2s;
  }
  .imagination {
    animation-delay: 2.4s;
  }
  .creativity {
    animation-delay: 2.8s;
  }
`;
