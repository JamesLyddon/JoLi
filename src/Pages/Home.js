import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Slogan from "../components/Slogan";
import Carousel from "../components/Carousel";
import Main from "../components/Main";
import { Container } from "../components/styles/Container.styled";

export default function Home() {
  return (
    <>
      <Container>
        <Logo />
        <Nav />
        <Slogan />
        <Carousel />
        <Main />
      </Container>
    </>
  );
}
