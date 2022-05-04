import { css } from '@emotion/react'

export default {
//over-rides ctrls
hidden: css`
display: hidden !important;
`,

// flexbox ctrls
flex: css`
  display: flex;
  `,

row: css`
flex-direction: row;
`,

col: css`
flex-direction: column;
`,

alignC: css`
align-items: center;
`,

justSpbw: css`
justify-content: space-between;
`,

justCent: css`
justify-content: center;
`,

justEnd: css`
justify-content: flex-end;
`,

//width/height ctrls

flex50: css`
flex-basis: 50%
`,

width50: css`
width: 50%;
`,

width80: css`
width: 80%;
`,

width100: css`
width: 100%
`,

height80: css`
height: 80%;
`,

//padding/margin ctrls

padding0: css`
padding: 0;
`,

padding25: css`
padding: 0.25rem;
`,

padding2rem: css`
padding: 2rem;
`,

contentWrap: css`
bottom: 10vh;
`,

margin0: css`
margin: 0;
`,

margin1rem: css`
margin: 1rem;
`,

//overflow ctrls

overflowScroll: css`
overflow: scroll;
`,

// component specific

footer: css`
position: fixed;
bottom: 0;
width: 100%;
height: 10vh;
padding: 1rem 0.5rem;
font-size: 1.5rem;
`

//   footer: css`
// width: 100%;
// height: 10vh;
// padding: 1rem 0.5rem;
// font-size: 1.5rem;
// `
}
