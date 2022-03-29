import { StyledNav } from "./styles/Nav.styled";

export default function Nav() {
  return (
    <StyledNav>
      <div>
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
    </StyledNav>
  );
}
