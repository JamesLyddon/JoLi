import "./App.css";
import studio from "./img/studio.jpg";
import Logo from "./components/Logo";
import { Container } from "./components/styles/Container.styled";
import { LogoContainer } from "./components/styles/LogoContainer.styled";

function App() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
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
      <h3 className="hero-copy">
        Motion graphics TV commercials, live action TV commercials, online
        video, animation, cinema commercial and promotional videos.
      </h3>
    </Container>
  );
}

export default App;

// BOILER-PLATE
// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>
