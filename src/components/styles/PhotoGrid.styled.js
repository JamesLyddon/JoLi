import styled from "styled-components";

export const StyledPhotoGrid = styled.div`
  display: grid;
  place-items: center;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

  img {
    max-width: 100%;
    display: block;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #000;
    transition: 0.3s ease-in-out;
  }
  .card:hover {
    .card__content {
      opacity: 1;
    }
    img {
      filter: blur(2px);
    }
  }
  .card {
    text-align: center;
  }
  .card__img {
    width: 100%;
    aspect-ratio: 1/1;
    z-index: -1;
    object-fit: cover;
  }
  .card__content {
    align-self: center;
    z-index: 1;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  .card__title,
  .card__description {
    padding: 0 0.2rem;
    margin: 0;
    text-shadow: 1px 1px 1px #111;
  }
  .card__title {
    color: rgb(255 68 51 / 0.9);
    font-size: 3vw;
    font-weight: 500;
    line-height: 1.1;
  }
  .card__description {
    color: #fff;
    font-size: 2vw;
  }

  .stacked {
    display: grid;
  }
  ${"" /* select any direct child */}
  .stacked > * {
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;
