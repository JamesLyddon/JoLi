import { StyledNav } from "./styles/Nav.styled";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <StyledNav>
      <div>
        <Link to="/promos">Promos</Link>
      </div>
      <div className="headshots">
        <Link to="/headshots">Headshots</Link>
      </div>
      <div className="studio">
        <Link to="/studio">Studio</Link>
      </div>
      <div className="contact">
        <Link to="/contact">Contact</Link>
      </div>
      <div className="client">
        <Link to="/client">Client</Link>
      </div>
    </StyledNav>
  );
}
