/** @jsx jsx */
import React, {useState,
              useEffect} from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'

import style from "../../style/style";
import layout from "../../style/layout"

export default function Project(props) {
  console.log('project.props:', JSON.parse(props.project.tech))
  const alternate = () => {
    if (props.index % 2) {
      return (
        <div css={[layout.flex, layout.width80, layout.alignC, layout.justSpbw]}>
          <div css={[layout.flex, layout.flex66, layout.alignC, layout.justCent]}>
            <section css={[style.textCent]}>
              <p css={[style.pfDisp, style.font2rem, style.bold, layout.margin0]}>{props.project.name}</p>
              <p css={[style.monts, style.font1rem]}>{props.project.description}</p>
            </section>
            <section css={[layout.flex, layout.flex66, layout.alignC, layout.justCent]}>

            </section>
          </div>
          <div css={[layout.flex, layout.flex33]}>
            <img src={props.project.imgUrl}
              css={[layout.width100]}
              alt="project-demo" />
          </div>
        </div>
      )
    } else {
      return (
        <div css={[layout.flex, layout.width80, layout.alignC, layout.justSpbw]}>
          <div css={[layout.flex, layout.flex33]}>
            <img src={props.project.imgUrl}
              css={[layout.width100]}
              alt="project-demo" />
          </div>
          <div css={[layout.flex, layout.flex66, layout.alignC, layout.justCent]}>
            <section css={[style.textCent]}>
              <p css={[style.pfDisp, style.font2rem, style.bold, layout.margin0]}>{props.project.name}</p>
              <p css={[style.monts, style.font1rem]}>{props.project.description}</p>
            </section>
          </div>
        </div>
      )
    }
  }

  return (
    <>
    <div css={[layout.flex, layout.height100, layout.width100, layout.alignC, layout.justCent]}>
      {alternate()}
    </div>

    </>
  )
}
