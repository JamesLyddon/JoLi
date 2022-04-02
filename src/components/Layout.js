import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./styles/Container.styled";
import Logo from "./Logo";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Container>
      <Logo />
      <Nav />
      <Outlet />
      <Footer />
    </Container>
  );
}
