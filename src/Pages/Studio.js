import React from "react";

import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `studio`;

const mainText = `studio`;

export default function Studio() {
  return (
    <>
      <Headline headlineText={headlineText} />
      <Main mainText={mainText} />
    </>
  );
}
