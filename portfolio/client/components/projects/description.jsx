/** @jsx jsx */
import React, { useState } from "react";
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import TechIconList from "./techIconList";

import style from "../../style/style";
import layout from "../../style/layout"

export default function Description(props) {
  const [screenSize, setScreenSize] = useState(screen.width);

  $(window).on('resize', () => setScreenSize(screen.width))

  const renderTechUsed = (screenSize) => {
    if (screenSize > 768) {
      return (
        <>
          <section css={[layout.flex, layout.col, layout.alignC, layout.justCent]}>
            <p css={[style.pfDisp, style.font2rem, style.bold]}>Tech Used:</p>
            <TechIconList techs={props.project.tech} />
          </section>
        </>
      )
    }
  }

  return (
    <div css={[layout.flex, layout.col, layout.flex66, layout.alignC, layout.justCent]}>
      <section css={[style.textCent]}>
        <p css={[style.pfDisp, style.font3rem, style.bold, layout.margin0]}>{props.project.name}</p>
        <p css={[style.monts, style.font1halfrem, style.light]}>{props.project.description}</p>
      </section>
      {renderTechUsed(screenSize)}
    </div>
  )
}
