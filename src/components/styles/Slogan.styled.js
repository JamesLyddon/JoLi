import styled from "styled-components";

export const StyledSlogan = styled.div`
  position: fixed;
  top: 35%;
  right: 25%;
  width: 50%;
  padding: 0;
  margin: 0;
  z-index: -2;
  ${"" /* transform: translate(-50%, -50%); */}
  text-align: center;
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
