import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Headline from "../components/Headline";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Container } from "../components/styles/Container.styled";

const headlineText = `promos`;

const mainText = `promos`;

export default function Promos() {
  return (
    <>
      <Container>
        <Logo />
        <Nav />
        <Headline headlineText={headlineText} />
        <Main mainText={mainText} />
        <Footer />
      </Container>
    </>
  );
}
