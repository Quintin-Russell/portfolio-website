/** @jsx jsx */
import React, { useState } from "react";
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import TechIconList from "./techIconList";

import style from "../../style/style";
import layout from "../../style/layout";
import lessThan768 from "../functions/lessthan768";

const cont = [layout.flex, layout.col, layout.alignC, layout.justCent]
const boldPfDisp = [style.pfDisp, style.bold]

export default function Description(props) {

  const renderTechUsed = (screenSize) => {
    if (!lessThan768(screenSize)) {
      return (
        <>
          <section css={cont}>
            <p css={[...boldPfDisp, style.font2rem]}>Tech Used:</p>
            <TechIconList techs={props.project.tech} />
          </section>
        </>
      )
    }
  }

  return (
    <div css={[...cont, layout.flex66]}>
      <section css={[style.textCent]}>
        <p css={[...boldPfDisp, layout.margin0, style.font3rem]}>{props.project.name}</p>
        <p css={[style.font1halfrem, style.monts, style.light]}>{props.project.description}</p>
      </section>
      {renderTechUsed(props.screenSize)}
    </div>
  )
}
