import { StyledLogo } from "./styles/Logo.styled";

export default function Logo() {
  return (
    <StyledLogo>
      <a href="/">
        <img
          className="logo-img"
          src="images/joli.jpg"
          alt="JoLi Studios Logo"
        />
      </a>
    </StyledLogo>
  );
}
