import React from "react";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `promos`;

const mainText = `promos`;

export default function Promos() {
  return (
    <>
      <Headline headlineText={headlineText} />
      <Main mainText={mainText} />
    </>
  );
}
