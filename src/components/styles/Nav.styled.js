import styled from "styled-components";

export const StyledNav = styled.div`
  a {
    text-decoration: none;
    color: rgb(212, 212, 212);
    padding: 0.5rem;
    box-shadow: inset 0 0 0 0 #c21807;
    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px #c21807 solid;
  }

  a:link {
    text-decoration: none;
    color: rgb(212, 212, 212);
  }

  a:visited {
    text-decoration: none;
    color: rgb(212, 212, 212);
  }

  a:hover {
    color: #161616;
    font-weight: 600;
    box-shadow: inset 0 -150px 0 0 #c21807;
  }

  nav {
    display: none;
  }

  .hamburger {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
    opacity: 0;
    animation: fade-in 1.5s ease forwards;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #c21807;
  }

  @media screen and (min-width: 600px) {
    nav {
      width: 80vw;
      max-width: 800px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      font-size: 1rem;
      place-items: center;
      text-align: center;
      gap: 0.5rem;
      opacity: 0;
      animation: fade-in 1.5s ease forwards;
    }
    .hamburger {
      display: none;
    }
  }
`;
