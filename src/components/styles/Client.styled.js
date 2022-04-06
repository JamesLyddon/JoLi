import styled from "styled-components";

export const StyledClient = styled.div`
  margin: 0 auto;
  padding-bottom: 1rem;
  width: 80vw;
  display: grid;
  place-items: center;
  gap: 4rem;
  grid-template-columns: 1fr;

  img {
    width: 100%;
    max-width: 400px;
    animation: fade-in 1.5s ease forwards;
  }
`;
