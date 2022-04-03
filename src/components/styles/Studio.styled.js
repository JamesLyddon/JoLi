import styled from "styled-components";

export const StyledStudio = styled.div`
  width: 80vw;
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  place-items: start center;
  grid-template-columns: 1fr 1fr;

  img {
    animation: fade-in 1.5s ease forwards;
    margin-top: 1rem;
    box-shadow: 3px 3px 0px #c21807;
  }
`;
