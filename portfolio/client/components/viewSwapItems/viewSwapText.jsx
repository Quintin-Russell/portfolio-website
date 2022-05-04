/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import style from '../../style/style'
import layout from '../../style/layout'

/*
text object to work with:
{
    this.name = name; str
    this.type = type; str
    this.page = page; str
    this.text = text; arr of strs
}
*/

export default function ViewSwapText(props) {
  return (
    <>
      <div css={[layout.overflowScroll, layout.padding25]}>
        {
          props.obj.text.map(txt => {
            return (
              <p css={[style.monts]}>{txt}</p>
            )
          })
        }
      </div>
    </>
  )
}