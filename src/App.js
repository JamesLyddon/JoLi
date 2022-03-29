import "./App.css";
import Logo from "./components/Logo";
import Nav from "./components/Nav";
import Slogan from "./components/Slogan";
import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <Container>
      <Logo />
      <Nav />
      <Slogan />
    </Container>
  );
}

export default App;
