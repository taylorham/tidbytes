import { createGlobalStyle } from "styled-components";

const fonts = [
  { family: "Geo", weight: [], italic: [] },
  { family: "Fira Code", weight: [300, 400], italic: [] },
  { family: "Fira Sans", weight: [300, 400], italic: [300, 400] },
  { family: "Merriweather", weight: [300, 400], italic: [300, 400] },
];

const fontSize = 1.5;
const fontScale = 1.33;

export const TypographicStyles = createGlobalStyle`
  :root {
    --heading-font: "Fira Sans";
    --body-font: "Merriweather";
    --body-font-size: ${fontSize}rem;
    --font-scale: ${fontScale};
    --h1-font-size: ${(fontSize * fontScale ** 4).toFixed(1)}rem;
    --h2-font-size: ${(fontSize * fontScale ** 3).toFixed(1)}rem;
    --h3-font-size: ${(fontSize * fontScale ** 2).toFixed(1)}rem;
    --h4-font-size: ${(fontSize * fontScale).toFixed(1)}rem;
    --caption-font-size: ${(fontSize / fontScale).toFixed(1)}rem;
    --tiny-font-size: ${(fontSize / fontScale ** 2).toFixed(1)}rem;
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
