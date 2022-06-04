/** @jsx jsx */
import React, { useState } from "react";
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import Description from "./description";
import ProjectImg from "./projectImg";

import style from "../../style/style";
import layout from "../../style/layout"

const contDivCss = [layout.flex, layout.width100, layout.alignC, layout.justCent]

export default function Project(props) {
  const [screenSize, setScreenSize] = useState(screen.width);

  $(window).on('resize', () => setScreenSize(screen.width))

  const alternate = () => {
    if (props.index % 2) {
      return (
        <>
          <Description project={props.project} />

          <ProjectImg project={props.project} />
        </>
      )
    } else {
      return (
        <>
          <ProjectImg project={props.project} />

          <Description project={props.project} />
        </>
      )
    }
  }

  return (
    <>
      <div
        style={{ backgroundColor: 'black' }}
        css={(screenSize > 768) ? [...contDivCss, layout.margin2rem] : contDivCss}>
        <div css={[layout.flex, layout.rowMobile, layout.width80, layout.alignC, layout.justSpbw]}>
          {alternate()}
        </div>

      </div>

    </>
  )
}
