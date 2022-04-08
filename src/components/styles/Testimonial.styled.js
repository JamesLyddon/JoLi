import styled from "styled-components";

export const StyledTestimonial = styled.div`
  opacity: 0;
  width: 80vw;
  animation: fade-in 1.5s ease forwards;
  animation-delay: 3.7s;
  vertical-align: text-top;
  margin-top: 2rem;

  .refText {
    max-width: 500px;
    font-size: 0.8rem;
    text-align: center;
    margin: 0 auto;
  }

  .refName,
  .quote {
    color: #c21807;
  }

  .refName {
    text-align: end;
    font-size: 1.2rem;
  }

  .quote {
    font-size: 2rem;
  }

  .quote-left,
  .quote-right {
    margin: 0;
    padding: 0;
  }

  .quote-left {
    text-align: start;
  }
  .quote-right {
    text-align: end;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: rgb(212, 212, 212);
  }

  @media screen and (min-width: 600px) {
  }
`;
