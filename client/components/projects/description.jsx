/** @jsx jsx */
import React, { useState } from "react";
import useScreenSize from '../../context/use-screen-size'
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import TechIconList from "./tech-icon-list";

import style from "../../style/style";
import layout from "../../style/layout";
import lessThan768 from "../functions/less-than-768";

const cont = [layout.flex, layout.col, layout.alignC, layout.justCent]
const boldPfDisp = [style.pfDisp, style.bold]

export default function Description(props) {
  const screenSize = useScreenSize()

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
      {renderTechUsed(screenSize.width)}
    </div>
  )
}
