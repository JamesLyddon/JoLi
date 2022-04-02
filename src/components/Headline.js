import React from "react";
import { StyledHeadline } from "./styles/Headline.styled";

export default function Headline({ headlineText }) {
  const isHome = window.location.pathname === "/";

  return (
    <StyledHeadline isHome={isHome}>
      <h2>{headlineText}</h2>
    </StyledHeadline>
  );
}
