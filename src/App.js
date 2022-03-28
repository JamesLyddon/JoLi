import "./App.css";
import studio from "./img/studio.jpg";
import Logo from "./components/Logo";
import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <Container>
      <Logo />
      <div className="nav">
        <div className="promos">Promos</div>
        <div className="headshots">Headshots</div>
        <div className="studio">Studio</div>
        <div className="contact">Contact</div>
        <div className="client">Client</div>
      </div>
      <div className="hero"></div>
      <span className="hero-title">
        Broadcast TV, Cinema, Online Promo and Video on Demand production
      </span>
      <img className="hero-img" src={studio} alt="" />
      <h2 className="hero-copy">
        Motion graphics TV commercials
        <br /> <br />
        live action TV commercials
        <br /> <br />
        online video animation <br /> <br />
        cinema commercial and promotional videos
      </h2>
    </Container>
  );
}

export default App;
