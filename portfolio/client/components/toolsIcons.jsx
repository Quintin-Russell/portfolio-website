/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import style from '../style/style'
import layout from '../style/layout'

import basics from '../../server/public/images/techIcons/basics.png'

export default function ToolsIcons() {
  return (
    <div css={[layout.flex, layout.alignC, layout.justCent]}>
      <img src={basics} alt="HTML,JS, CSS" />
    </div>
  )
}
