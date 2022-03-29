import "./App.css";
import Logo from "./components/Logo";
import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <Container>
      <Logo />
      <div className="nav">
        <div className="promos">
          <a href="https://google.com">Promos</a>
        </div>
        <div className="headshots">
          <a href="https://google.com">Headshots</a>
        </div>
        <div className="studio">
          <a href="https://google.com">Studio</a>
        </div>
        <div className="contact">
          <a href="https://google.com">Contact</a>
        </div>
        <div className="client">
          <a href="https://google.com">Client</a>
        </div>
      </div>
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
