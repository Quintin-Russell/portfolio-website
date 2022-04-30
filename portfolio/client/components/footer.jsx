/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import style from "../style/style";
import layout from "../style/layout"

export default function Footer(props) {
return (
  <div css={[style.fade, style.incon, layout.flex, layout.row, layout.justSpbw, layout.footer]}>
    <a href="about">{`-ABOUT-`}</a>
    <a href="projects">{`-SEE MY WORK-`}</a>
    <a href="contact">{`-CONTACT ME-`}</a>
  </div>
)
}
