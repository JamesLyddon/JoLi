import React from "react";
import { StyledClient } from "../components/styles/Client.styled";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `Client Area`;

const mainText = ``;

export default function Client() {
  return (
    <div id="client">
      <Headline headlineText={headlineText} />
      <StyledClient>
        <Main mainText={mainText} />
        <a href="https://www.jolistudios.co.uk/itv-file-archive">
          <img src={require("../assets/images/itv.webp")} alt="ITV logo" />
        </a>
        <a href="https://www.jolistudios.co.uk/dualcom-file-archive">
          <img src={require("../assets/images/csl.webp")} alt="CSL logo" />
        </a>
      </StyledClient>
    </div>
  );
}
