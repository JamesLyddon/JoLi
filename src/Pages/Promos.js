import React from "react";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `Why not let us show you or your clients what we love to do!`;

const mainText = `Motion graphics TV commercials, live action TV commercials, online video, animation, cinema commercial and promotional videos.`;

export default function Promos() {
  return (
    <>
      <Headline headlineText={headlineText} />
      <Main mainText={mainText} />
    </>
  );
}
