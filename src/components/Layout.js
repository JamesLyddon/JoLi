import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Logo />
      <Nav />
      <Outlet />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}
