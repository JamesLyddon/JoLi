import React from "react";
import { StyledHeadline } from "./styles/Headline.styled";

export default function Headline({ headlineText }) {
  return (
    <StyledHeadline>
      <h2>{headlineText}</h2>
    </StyledHeadline>
  );
}
