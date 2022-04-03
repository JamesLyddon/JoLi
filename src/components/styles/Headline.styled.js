import styled from "styled-components";

export const StyledHeadline = styled.div`
  opacity: 0;
  animation: fade-in 1.5s ease forwards;
  animation-delay: ${(props) => (props.isHome ? 3.7 : 0)}s;
  line-height: 1.5;
  letter-spacing: 1.5px;
  max-width: 60vw;
  min-width: 500px;
  margin: 0 auto;
  text-align: center;
  padding-top: 1rem;
  h2 {
    font-size: 1.7rem;
    font-weight: 300;
  }
`;
