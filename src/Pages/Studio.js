import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Headline from "../components/Headline";
import Main from "../components/Main";
import { Container } from "../components/styles/Container.styled";

const headlineText = `studio`;

const mainText = `studio`;

export default function Studio() {
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
