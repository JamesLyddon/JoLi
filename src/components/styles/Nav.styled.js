import styled from "styled-components";

export const StyledNav = styled.div`
  max-width: 90vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 1rem;
  place-items: center;
  text-align: center;
  opacity: 0;
  animation: fade-in 1.5s ease forwards;
  animation-delay: 1s;

  .navbar a {
    text-decoration: none;
    color: rgb(212, 212, 212);
    padding: 0.5rem;
    box-shadow: inset 0 0 0 0 #c21807;
    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px #c21807 solid;
  }

  .navbar a:link {
    text-decoration: none;
    color: rgb(212, 212, 212);
  }

  .navbar a:visited {
    text-decoration: none;
    color: rgb(212, 212, 212);
  }

  .navbar a:hover {
    color: #161616;
    font-weight: 600;
    box-shadow: inset 0 -150px 0 0 #c21807;
  }

  .navbar li {
    list-style: none;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .hamburger {
    display: none;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #c21807;
  }

  .nav-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .nav-item {
    margin-left: 5rem;
  }
`;
