import { css } from '@emotion/react'

export default {
//fonts
  incon: css`
  font-family: Inconsolata, monospace;
  `,

  monts: css`
  font-family: Montserrat, sans-serif;
  `,

  pfDisp: css`
  font-family: "Playfair Display", serif;
  `,

  bold: css`
  font-weight: 600;
  `,

  light: css`
  font-weight: 100;
  `,

  fade: css`
    background: linear-gradient(to right, #000000, #0c0c0c, rgba(132, 132, 132, .50));
  `,

  fadeTxt: css`
  font-size: 2rem;
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
//component specific text

  typewriterLandingPage: css`
      color: #fff;
      font-size: 3rem;
  `,

  landingPgTxtSize: css`
  font-size: 3rem;
  `,

  landingPgTxt_or: css`
  color: #E28D29;
  `,

  landingPgTxt_bl: css`
  color: #5DB2B8;
  `,
//underline
  noUnderline: css`
  text-decoration: none;
  `,

  whiteUnderline: css`
  text-decoration: underline;
  `,

  techIconBasics: css`
  height: 10rem;
  `,

//borders
  borderLight: css`
  border: 0.05rem solid #fff;
  `,

  //component specific style

  headerA : css`
  font-size: 1.5rem;
  color: #fff;
  padding: 0 1rem;
  `,

  hoverA: css`
  transition: all ease 2s;

    :hover {
      font-size: 2.5rem;
      color: #E28D29;
      cursor: pointer;
      }
  `,

  menuIcon: css`
  transform: rotate(180deg);
  font-size: 2rem;

    :hover {
    font-size: 3rem;
    }
  `,

  highlightedTab: css`
  background-color: #E9E9E940;
  `,

  //imgs
  img: css`
  height: 5rem;
  `
}
