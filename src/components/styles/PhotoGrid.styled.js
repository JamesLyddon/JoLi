import styled from "styled-components";

export const StyledPhotoGrid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr;

  img {
    width: 100%;
    display: block;
  }
`;
