import { css } from '@emotion/react'

export default {
flex: css`
  display: flex;
  `,

row: css`
flex-direction: row;
`,

col: css`
flex-direction: column;
`,

contentWrap: css`
padding-bottom: 10vh;
`,


justSpbw: css`
justify-content: space-between;
`,

alignC: css`
align-items: center;
`,

justCent: css`
justify-content: center;
`,

flex50: css`
flex-basis: 50%
`,

padding25: css`
padding: 0.25rem;
`,

padding2rem: css`
padding: 2rem;
`,

margin0: css`
margin: 0;
`,

margin1rem: css`
margin: 1rem;
`,

footer: css`
position: absolute;
bottom: 0;
width: 100%;
height: 10vh;
padding: 1rem 0.5rem;
font-size: 1.5rem;
`,

justEnd: css`
justify-content: flex-end;
`
}
