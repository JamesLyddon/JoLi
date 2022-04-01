import { StyledMain } from "./styles/Main.styled";

export default function Main({ mainText }) {
  return (
    <StyledMain>
      <p>{mainText}</p>
    </StyledMain>
  );
}
