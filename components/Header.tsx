import styled from "styled-components";
import { DiagonalBackground } from "../styles/DiagonalBackground";

const DropShadow = styled.div`
  filter: drop-shadow(0px -1px 10px rgba(0, 0, 0, 0.25));
`;

const StyledHeader = styled.header`
  padding: 0.5rem 1.5rem 2rem;

  h1 {
    font-family: "Geo", monospace;
    letter-spacing: -0.2rem;
    text-shadow: 0.2rem 0.2rem 0.5rem var(--navy);
    font-size: calc(var(--h1-font-size) * 1.25);
    margin-bottom: -0.6rem;
  }
  small {
    font-family: "Fira Sans", monospace;
    font-size: calc(var(--small-font-size) * 1.25);
    font-weight: 400;
    padding-left: 0.5rem;
  }
`;

const Y = styled.span`
  letter-spacing: -0.4rem;
`;

export function Header() {
  return (
    <DropShadow>
      <DiagonalBackground
        background={`linear-gradient(
          0.455turn,
          var(--electric-blue),
          var(--shadow)
        )`}
      >
        <StyledHeader>
          <h1>
            TidB
            <Y>y</Y>
            tes
          </h1>
          <small>{`Taylor Ham's Tech Tidbits`}</small>
        </StyledHeader>
      </DiagonalBackground>
    </DropShadow>
  );
}
