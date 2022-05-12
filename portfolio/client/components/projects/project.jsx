/** @jsx jsx */
import React, {useState,
              useEffect} from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'

import style from "../../style/style";
import layout from "../../style/layout"

export default function Project(props) {
  const alternate = () => {
    if (props.index % 2) {
      return (

      )
    }
  }
  return (
    <>
    <div css={[layout.flex, layout.height100, layout.width100, layout.alignC, layout.justCent]}>
      <div css={[layout.flex, layout.width80, layout.alignC, layout.justSpbw]}>
        <div css={[layout.flex, layout.flex66]}></div>
        <div></div>
      </div>
    </div>

    </>
  )
}
