/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'

import style from "../../style/style";
import layout from "../../style/layout"

export default function ToolsText() {

return (
  <div css={[layout.flex, layout.flex50, layout.col, layout.alignC, layout.justCent]}>
    <p css={[style.monts, layout.padding25, style.bold]}>HTML</p>
    <p css={[style.monts, layout.padding25, style.bold]}>CSS</p>
    <div css={[layout.flex, layout.col, layout.alignC, layout.justCent, style.monts, layout.padding25, style.bold]}>
      <p>JavaScript</p>
      <p css={[style.light, layout.margin0]}>React.js</p>
      <p css={[style.light, layout.margin0]}>NodeJS</p>
      <p css={[style.light, layout.margin0]}>jQuery</p>
      <p css={[style.light, layout.margin0]}>PostgreSQL</p>
    </div>
    <p css={[style.monts, layout.padding25, style.bold]}>Python</p>
    <p css={[style.monts, layout.padding25, style.bold]}>SQL</p>
  </div>
)
}
