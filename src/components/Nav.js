import { StyledNav } from "./styles/Nav.styled";
import Logo from "./Logo";
export default function Nav() {
  return (
    <StyledNav>
      <Logo />
      <nav class="navbar">
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#" class="nav-link">
              Headshots
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Studio
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Client
            </a>
          </li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </StyledNav>
  );
}

{
  /* <div>
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
</div> */
}
