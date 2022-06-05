/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import style from '../../style/style'
import layout from '../../style/layout'

const liCss = [layout.padding2rem, style.incon]

export default function ViewSwapList(props) {
  return (
    <>
      <ul css={[layout.flex, layout.col]}>
        {
          props.obj.text.map(item => {
            return <li key={item} css={liCss}>{item}</li>
          })
        }
      </ul>
    </>
  )
}
