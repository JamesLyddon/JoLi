import { StyledNav } from "./styles/Nav.styled";

export default function Nav() {
  return (
    <StyledNav>
      <div>
        <a href="/promos">Promos</a>
      </div>
      <div className="headshots">
        <a href="/headshots">Headshots</a>
      </div>
      <div className="studio">
        <a href="/studio">Studio</a>
      </div>
      <div className="contact">
        <a href="/contact">Contact</a>
      </div>
      <div className="client">
        <a href="/client">Client</a>
      </div>
    </StyledNav>
  );
}
