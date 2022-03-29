import "./App.css";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <Container>
      <Logo />
      <Nav />
      <span className="hero-title">
        Broadcast TV, Cinema, Online Promo and Video on Demand production
      </span>
      <div className="hero">
        <img className="hero-img" src="images/studio.jpg" alt="" />
      </div>
      {/* 
      <span className="hero-copy">
        Motion graphics TV commercials
        <br /> <br />
        live action TV commercials
        <br /> <br />
        online video animation
        <br /> <br />
        cinema commercial
        <br /> <br />
        promotional videos
      </span> */}
    </Container>
  );
}

export default App;
