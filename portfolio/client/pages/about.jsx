/** @jsx jsx */
import React, {useState,
              useEffect} from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import Footer from "../components/footer";
import Typewriter from "../components/typewriter";
import ToolsIcons from "../components/toolsicons"
import ViewSwap from "../components/viewSwap";

import story from "../components/viewSwapItems/story";

import style from "../style/style";
import layout from "../style/layout"

export default function About() {
  const viewSwapItems = [story]

  return (
    <>
      <ParallaxLayer className="bkg1"
      speed={1}>
        <Header />
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
          <p css={[layout.margin0, layout.flex, layout.flex50, layout.justCent, style.incon, style.typewriterLandingPage]}>Tools</p>
        </div>
        <div css={[layout.flex, layout.alignC, layout.justSpbw, layout.row]}>
          <div css={[layout.flex, layout.flex50, layout.justCent]}>
            <ToolsIcons />
          </div>
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
        </div>
      </ParallaxLayer>
      <ParallaxLayer
      offset={1}
      speed={0.2}
      className="bkg2">

      </ParallaxLayer>
      <ParallaxLayer
      offset={2}
      className="bkg3"
      css={[layout.flex, layout.alignC, layout.justCent]}>
        <ViewSwap objList={viewSwapItems} />
      </ParallaxLayer>
    </>
  )
}
