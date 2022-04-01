import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Main from "../components/Main";
import { Container } from "../components/styles/Container.styled";

export default function Headshots() {
  return (
    <>
      <Container>
        <Logo />
        <Nav />
        <Main />
      </Container>
    </>
  );
}
