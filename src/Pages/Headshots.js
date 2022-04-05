import React from "react";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `Professional, Actor and Model Headshots`;

const mainText = (
  <div>
    <p>
      What do you get? A professional one hour shoot in our photo studio, after
      which you'll receive all images as digital files by email.
    </p>
    <p>
      Tell us which five are your favourite and we'll get to work retouching the
      images.
    </p>
    <p>
      Depending on what the purpose of the images are we can also add our own
      uniqe style to produce eyecatching images.
    </p>
    <p>
      If you would like to get 8x10 prints or comp sheets simply contact us for
      our prices, email us for our student discount price!
    </p>
  </div>
);

export default function Headshots() {
  return (
    <div id="headshots">
      <Headline headlineText={headlineText} />
      <Main mainText={mainText} />
    </div>
  );
}
