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

  font1rem: css`
  font-size: 1rem;
  `,

  font1halfrem: css`
  font-size: 1.5rem;
  `,

  font2rem: css`
  font-size: 2rem;
  `,

  font2halfrem: css`
  font-size: 2.5rem;
  `,

  font3rem: css`
  font-size: 3rem;
  `,

  textCent: css`
  text-align: center;
  `,

//component specific text
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

  landingPgTxt_or: css`
  color: #E28D29;
  `,

  landingPgTxt_bl: css`
  color: #5DB2B8;
  `,

  arrow: css`
  font-size: 4rem;

      :hover {
      cursor: pointer;
    }
  `,

//underline
  noUnderline: css`
  text-decoration: none;
  `,

  whiteUnderline: css`
  text-decoration: underline;
  `,

//list styling
noListStyle: css`
list-style: none;
`,

//borders
  borderLight: css`
  border: 0.05rem solid #fff;
  `,

  noBorderBottom: css`
  border-top: 0.05rem solid #fff;
  border-left: 0.05rem solid #fff;
  border-right: 0.05rem solid #fff;
  border-bottom: 0;
  `,

  //component specific style
  techIconBasics: css`
  height: 10rem;
  `,

  headerA : css`
  font-size: 1.5rem;
  color: #fff;
  padding: 0 1rem;
  `,

  hoverA: css`
  transition: all ease 2s;

    :hover {
      font-size: 1.25rem;
      cursor: pointer;
      }
  `,

  menuIcon: css`
  transition: all ease 0.5s;
  transform: rotate(180deg);
  font-size: 2rem;

    :hover {
    font-size: 3rem;
    cursor: pointer;
    }
  `,

  highlightedTab: css`
  background-color: #E9E9E960;
  `,

  // viewSwapHeader: css`
  // border-top: 0;
  // border-left: 0.05rem solid #fff;
  // border-right: 0.05rem solid #fff;
  // border-bottom: 0.15rem solid #fff;
  // `,

  dots: css`
  font-size: 1rem;
  `,

  cursor: css`
  transition: all ease 2s;

    :hover {
      cursor: pointer;
      font-size: 1.5rem;
    }
  `,

  //imgs
  img: css`
  height: 5rem;
  `
}
