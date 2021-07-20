import styled from "styled-components";
import { Children } from "react";
import type { ReactNode } from "react";

function calculateMagicNumber(angle = -8) {
  return Math.abs(Math.tan((angle * Math.PI) / 180) / 2).toFixed(5);
}

export const DiagonalBackground = styled.div<{
  background: string;
  angle?: number;
  prevPadding?: string;
}>`
  --magic-number: ${({ angle = -8 }) => calculateMagicNumber(angle)};
  --clip-padding: calc(100vw * var(--magic-number));

  background: ${({ background }) => background};
  position: relative;
  padding: ${({ prevPadding }) => prevPadding ?? 0} 0 var(--clip-padding);
  margin-bottom: calc(var(--clip-padding) * -1);
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100%
      ${({ angle = -8 }) =>
        Math.sign(angle) > 0 ? `100%` : `calc(100% - var(--clip-padding))`},
    0%
      ${({ angle = -8 }) =>
        Math.sign(angle) < 0 ? `100%` : `calc(100% - var(--clip-padding))`}
  );

  > * {
    position: relative;
  }
`;

const DropShadow = styled.div`
  filter: drop-shadow(0px -1px 10px rgba(0, 0, 0, 0.5));
`;

const ReverseTheReverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export function LayerDiagonalsWithShadow({
  children,
}: {
  children: ReactNode;
}) {
  const wrappedAndReversedChildren = Children.toArray(children)
    .map((child, index, childrenArray) => {
      const { angle = -8 } = childrenArray[index - 1]?.props ?? child.props;
      const magicNumber = calculateMagicNumber(angle);
      const Child = child?.type;

      return (
        <DropShadow key={index}>
          <Child
            {...child.props}
            style={{
              ...child.props?.style,
              paddingTop: `calc(100vw * ${magicNumber})`,
            }}
          />
        </DropShadow>
      );
    })
    .reverse();

  return <ReverseTheReverse>{wrappedAndReversedChildren}</ReverseTheReverse>;
}
