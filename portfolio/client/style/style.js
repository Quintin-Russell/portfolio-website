import { css } from '@emotion/react'

export default {

  incon: css`
  font-family: Inconsolata, monospace;
  `,

  monts: css`
  font-family: Montserrat, sans-serif;
  `,

  pfDisp: css`
  font-family: "Playfair Display", serif;
  `,

  fade: css`
    background: linear-gradient(to right, #000000, #0c0c0c, rgba(132, 132, 132, .50));
  `,

  fadeTxt: css`
  font-size: 1.5rem;
  font-weight: 300;
  background:
    -webkit-linear-gradient(
      left,
      #fff,
      #545454
    );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `,

  noUnderline: css`
  text-decoration: none;
  `,

  whiteUnderline: css`
  text-decoration: underline;
  `,

  headerA : css`
  font-size: 1rem;
  color: #fff;
  padding: 0 1rem;
  `,

  menuIcon: css`
  transform: rotate(180deg);
  font-size: 1.5rem
  `,

  typewriterLandingPage: css`
      color: #fff;
      font-size: 2rem;
  `
}
