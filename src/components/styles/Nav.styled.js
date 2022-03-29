import styled from "styled-components";

export const StyledNav = styled.div`
  padding-top: 1rem;
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 0.8rem;
  place-items: center;
  opacity: 0;
  animation: fade-in 1.5s ease forwards;
  animation-delay: 1s;

  a {
    animation: no-shadow 0.5s ease forwards;
    color: #fff;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    animation: shadow-on-hover 0.5s ease forwards;
  }

  @keyframes shadow-on-hover {
    from {
      text-shadow: none;
    }
    to {
      text-shadow: 3px 3px 1px #000;
    }
  }

  @keyframes no-shadow {
    from {
      text-shadow: 3px 3px 1px #000;
    }
    to {
      text-shadow: none;
    }
  }
`;
