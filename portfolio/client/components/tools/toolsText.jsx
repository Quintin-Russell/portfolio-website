/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'

import style from "../../style/style";
import layout from "../../style/layout"

const contDiv = [layout.flex, layout.col, layout.alignC, layout.justCent]
const montsBold = [layout.padding25, style.monts, style.font1halfrem, style.bold]
const light = [layout.margin0, style.light]

export default function ToolsText() {

  return (
    <div css={[...contDiv, layout.flex50]}>
      <p css={montsBold}>HTML</p>
      <p css={montsBold}>CSS</p>
      <div css={[...montsBold, contDiv]}>
        <p>JavaScript</p>
        <p css={light}>React.js</p>
        <p css={light}>NodeJS</p>
        <p css={light}>jQuery</p>
        <p css={light}>PostgreSQL</p>
      </div>
      <p css={montsBold}>Python</p>
      <p css={montsBold}>SQL</p>
    </div>
  )
}
