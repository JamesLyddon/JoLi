import styled from "styled-components";

export const StyledContact = styled.div`
  opacity: 0;
  width: 80vw;
  animation: fade-in 1.5s ease forwards;
  animation-delay: 3.7s;

  img {
    width: 90%;
    display: block;
    margin: 2rem auto;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #000;
  }
  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: rgb(212, 212, 212);
  }

  @media screen and (min-width: 600px) {
    .main1 {
      text-align: center;
    }
  }
`;
