import React from "react";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `contact`;

const mainText = `contact`;

export default function Contact() {
  return (
    <>
      <Headline headlineText={headlineText} />
      <Main mainText={mainText} />
    </>
  );
}
