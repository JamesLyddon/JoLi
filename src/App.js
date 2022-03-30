import "./App.css";

import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Slogan from "./components/Slogan";
import Carousel from "./components/Carousel";
import { Container } from "./components/styles/Container.styled";

function App() {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
  };

  return (
    <>
      <Container>
        <Logo />
        <Nav />
        <Slogan />
        <Carousel />
      </Container>
    </>
  );
}

export default App;
