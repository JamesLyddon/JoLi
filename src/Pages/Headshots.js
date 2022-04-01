import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Headline from "../components/Headline";
import Main from "../components/Main";
import { Container } from "../components/styles/Container.styled";

const headlineText = `Professional, Actor and Model Headshots`;

const mainText = `What do you get? A professional one hour shoot in our photo studio, after which you'll receive all images as digital files by email. Tell us which five are your favourite and we'll get to work retouching the images. Depending on what the purpose of the images are we can also add our own uniqe style to produce eyecatching images. If you would like to get 8x10 prints or comp sheets simply contact us for our prices, email us for our student discount price!`;

export default function Headshots() {
  return (
    <>
      <Container>
        <Logo />
        <Nav />
        <Headline headlineText={headlineText} />
        <Main mainText={mainText} />
      </Container>
    </>
  );
}
