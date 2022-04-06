import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Logo />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
