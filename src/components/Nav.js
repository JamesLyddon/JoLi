import { StyledNav } from "./styles/Nav.styled";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  return (
    <StyledNav>
      <nav>
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
      </nav>
      <div className="hamburger">
        <GiHamburgerMenu />
      </div>
    </StyledNav>
  );
}
