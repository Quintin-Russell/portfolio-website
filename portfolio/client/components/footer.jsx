/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import style from "../style/style";
import layout from "../style/layout"

const aCss = [style.hoverA, layout.padding25]

export default function Footer(props) {
  return (
    <div css={[style.fade, style.incon, layout.flex, layout.row, layout.justSpbw, layout.alignC, layout.footer]}>
      <a css={aCss} href="#about">{`-ABOUT-`}</a>
      <a css={aCss} href="#projects">{`-SEE MY WORK-`}</a>
      <a css={aCss} href="#contact">{`-CONTACT ME-`}</a>
    </div>
  )
}
