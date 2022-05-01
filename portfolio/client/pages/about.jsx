/** @jsx jsx */
import React, {useState,
              useEffect} from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import Footer from "../components/footer";
import Typewriter from "../components/typewriter";
import style from "../style/style";
import layout from "../style/layout"

export default function About() {
  return (
    <>
      <ParallaxLayer className="bkg1">
        <div css={[layout.flex, layout.row, layout.justCent]}>
          <Typewriter
            font='incon'
            tarString="
            hi, i'm quintin.
            "
            bold={[]}
            cursorDisappear={true}
          />
        </div>
        <div css={[layout.flex, layout.justEnd]}>
          <p css={[layout.flex, layout.flex50, layout.justCent, style.incon, style.typewriterLandingPage]}>Tools</p>
        </div>
        <div css={[layout.flex, layout.alignC, layout.justSpbw, layout.row]}>
          <div css={[layout.flex, layout.flex50]}>

          </div>
          <div css={[layout.flex, layout.flex50]}>

          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
      offset={1}
      className="bkg2">

      </ParallaxLayer>
      <ParallaxLayer
      offset={2}
      className="bkg3">

      </ParallaxLayer>
    </>
  )
}
