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
    padding: 0 1rem;
    color: rgb(212, 212, 212);
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
    color: rgb(212, 212, 212);
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
