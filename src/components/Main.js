import { StyledMain } from "./styles/Main.styled";

export default function Main({ mainText }) {
  const isHome = window.location.pathname === "/";

  return (
    <StyledMain isHome={isHome}>
      <p>{mainText}</p>
    </StyledMain>
  );
}
