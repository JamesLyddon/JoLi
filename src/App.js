import "./App.css";
import studio from "./img/studio.jpg";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img
          class="logo-img"
          src="https://static.wixstatic.com/media/b593f2_6cf4902d7618953be81d778a91a0330a.png/v1/fill/w_360,h_222,al_c,usm_0.66_1.00_0.01,enc_auto/b593f2_6cf4902d7618953be81d778a91a0330a.png"
          alt=""
        />
      </div>
      <div className="nav">
        <div className="promos">Promos</div>
        <div className="headshots">Headshots</div>
        <div className="studio">Studio</div>
        <div className="contact">Contact</div>
        <div className="client">Client</div>
      </div>
      <div className="hero">
        <h6 class="hero-title">
          Broadcast TV, Cinema, Online Promo and Video on Demand production
        </h6>
      </div>
      <img class="hero-img" src={studio} alt="" />
      <span class="hero-copy">
        Motion graphics TV commercials, live action TV commercials, online
        video, animation, cinema commercial and promotional videos.
      </span>
    </div>
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
