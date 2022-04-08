import "./App.css";
import Home from "./Pages/Home";
import Headshots from "./Pages/Headshots";
import Studio from "./Pages/Studio";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";
import Client from "./Pages/Client";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Logo />
      <Nav />
      <Home />
      <Headshots />
      <Studio />
      <Testimonials />
      <Contact />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
