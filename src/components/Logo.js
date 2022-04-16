import { StyledLogo } from "./styles/Logo.styled";

export default function Logo() {
  return (
    <StyledLogo>
      <a href="https://jameslyddon.github.io/joli">
        <img
          className="logo-img"
          src={require("../assets/images/joli.jpg")}
          alt="JoLi Studios Logo"
        />
      </a>
    </StyledLogo>
  );
}
