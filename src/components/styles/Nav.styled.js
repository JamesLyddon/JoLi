import styled from "styled-components";

export const StyledNav = styled.div`
  padding-top: 2rem;
  width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 1.2rem;
  place-items: center;
  text-align: center;
  opacity: 0;
  animation: fade-in 1.5s ease forwards;
  animation-delay: 1s;

  a {
    color: rgb(212, 212, 212);
    padding: 0.5rem;
    box-shadow: inset 0 0 0 0 #c21807;
    transition: color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    border-radius: 5px 5px 0 0;
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

  @keyframes hover-on {
    from {
    }
    to {
    }
  }

  @keyframes hover-off {
    from {
    }
    to {
    }
  }
`;
