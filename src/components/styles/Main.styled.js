import styled from "styled-components";

export const StyledMain = styled.div`
  opacity: 0;
  animation: fade-in 1.5s ease forwards;
  animation-delay: ${(props) => (props.isHome ? 3.7 : 0)}s;

  width: 80vw;

  div {
    max-width: 800px;
    font-size: 0.9rem;
    line-height: 1.5;
    letter-spacing: 1px;
    font-weight: 300;
    margin: 0 auto;
  }
`;
