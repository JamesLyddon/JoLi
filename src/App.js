import "./App.css";
import { Container } from "./components/styles/Container.styled";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Promos from "./Pages/Promos";
import Headshots from "./Pages/Headshots";
import Studio from "./Pages/Studio";
import Contact from "./Pages/Contact";
import Client from "./Pages/Client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Logo />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/headshots" element={<Headshots />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client" element={<Client />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  );
}

export default App;
