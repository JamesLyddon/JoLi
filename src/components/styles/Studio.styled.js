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
    opacity: 0.6;
    box-shadow: 5px 5px 0px #c21807;
  }
`;
