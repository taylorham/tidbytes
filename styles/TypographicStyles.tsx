import { createGlobalStyle } from "styled-components";

const fonts = [
  { family: "Geo", weight: [], italic: [] },
  { family: "Fira Code", weight: [300, 400], italic: [] },
  { family: "Fira Sans", weight: [300, 400], italic: [300, 400] },
  { family: "Merriweather", weight: [300, 400], italic: [300, 400] },
];

const fontSize = 1.4;
const fontScale = 1.33;

function calculateSize(factor = 1) {
  let roundedSize;
  if (Math.sign(factor) > 0) {
    roundedSize = (fontSize * fontScale ** factor).toFixed(1);
  } else {
    roundedSize = (fontSize / fontScale ** (factor * -1)).toFixed(1);
  }
  return `${roundedSize}rem`;
}

export const TypographicStyles = createGlobalStyle`
  :root {
    --heading-font: "Fira Sans";
    --body-font: "Merriweather";
    --body-font-size: ${fontSize}rem;
    --font-scale: ${fontScale};
    --h1-font-size: ${calculateSize(4)};
    --h2-font-size: ${calculateSize(3)};
    --h3-font-size: ${calculateSize(2)};
    --h4-font-size: ${calculateSize()};
    --caption-font-size: ${calculateSize(-1)};
    --tiny-font-size: ${calculateSize(-2)};
  }

  html {
    font-size: 10px;
    line-height: 1.6;
    letter-spacing: 0.03rem;
  }

  body,
  p {
    color: var(--off-white);
    font-family: var(--body-font);
    font-weight: 300;
    font-size: var(--body-font-size);
    letter-spacing: 0.05rem;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--heading-font);
    font-weight: 400;
  }
  h1 {
    font-size: var(--h1-font-size);
  }
  h2 {
    font-size: var(--h2-font-size);
  }
  h3 {
    font-size: var(--h3-font-size);
  }
  h4 {
    font-size: var(--h4-font-size);
  }
`;
