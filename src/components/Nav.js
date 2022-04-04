import { StyledNav } from "./styles/Nav.styled";
import { GiHamburgerMenu } from "react-icons/gi";

const showMenu = function () {
  const dropDown = document.querySelector(".drop-down");
  const hamburgerButton = document.querySelector(".hamburger");
  hamburgerButton.style.display = "none";
  dropDown.style.display = "block";
};

export default function Nav() {
  return (
    <StyledNav>
      <nav>
        <div>
          <a href="#home">Promos</a>
        </div>
        <div className="headshots">
          <a href="#headshots">Headshots</a>
        </div>
        <div className="studio">
          <a href="#studio">Studio</a>
        </div>
        <div className="contact">
          <a href="#contact">Contact</a>
        </div>
        <div className="client">
          <a href="#client">Client</a>
        </div>
      </nav>
      <div className="hamburger">
        <GiHamburgerMenu onClick={showMenu} />
      </div>
      <div className="drop-down">
        <div>
          <a href="#home">Promos</a>
        </div>
        <div>
          <a href="#headshots">Headshots</a>
        </div>
        <div>
          <a href="#studio">Studio</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <a href="#client">Client</a>
        </div>
      </div>
    </StyledNav>
  );
}
