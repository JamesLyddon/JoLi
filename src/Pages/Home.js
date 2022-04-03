import React from "react";
import Slogan from "../components/Slogan";
import Carousel from "../components/Carousel";
import Headline from "../components/Headline";
import Main from "../components/Main";

const headlineText = `Video, Audio and Motion Graphic suite and facilities`;

const mainText = (
  <div>
    <p>
      We can work to virtually any budget for above and below the line
      advertising ranging from TV, Cinema and Video on Demand to print, events
      and various forms of web-based media and online advertising. We regularly
      work with ITV Anglia to provide high quality TV commercial production at
      the best possible price.
    </p>
    <p>
      Click here to find out more about our Creative Director from clients and
      colleagues. Show reel available on request. Our production facility in
      Colchester is the perfect place to pop in and talk about what we can do
      for you, call us to book today! Why not write a quick email to us now
    </p>
  </div>
);

export default function Home() {
  return (
    <>
      <Headline headlineText={headlineText} />
      <Slogan />
      <Carousel />
      <Main mainText={mainText} />
    </>
  );
}
