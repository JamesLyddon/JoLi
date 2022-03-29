import styled from "styled-components";

export const StyledLogo = styled.div`
  display: grid;
  place-items: center;

  img {
    box-shadow: inset 0 0 0 0 #c21807;
    transition: color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  }

  img:hover {
    color: #c21807;
    font-style: italic;
    font-weight: 600;
    box-shadow: inset 0px 0 150px 0 #c21807;
  }
`;
