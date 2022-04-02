import styled from "styled-components";

export const StyledMain = styled.div`
  opacity: 0;
  animation: fade-in 1.5s ease forwards;
  animation-delay: ${(props) => (props.isHome ? 3.5 : 0)}s;

  line-height: 1.8;
  letter-spacing: 0.5px;
  width: 60vw;
  min-width: 500px;
  margin: 0 auto;
  text-align: center;
`;
