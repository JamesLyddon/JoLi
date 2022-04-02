import React from "react";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `Client`;

const mainText = `Client`;

export default function Client() {
  return (
    <>
      <Headline headlineText={headlineText} />
      <Main mainText={mainText} />
    </>
  );
}
