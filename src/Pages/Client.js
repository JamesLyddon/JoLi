import React from "react";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `Client`;

const mainText = `Client`;

export default function Client() {
  return (
    <div id="client">
      <Headline headlineText={headlineText} />
      <Main mainText={mainText} />
    </div>
  );
}
