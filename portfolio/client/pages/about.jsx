/** @jsx jsx */
import React, {useState,
              useEffect} from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import Footer from "../components/footer";
import Typewriter from "../components/typewriter";
import ToolsText from "../components/tools/toolsText";
import ToolsIcons from "../components/tools/toolsIcons";
import AboutPhoto from "../components/about/aboutPhoto";
import ViewSwap from "../components/viewSwap";

import story from "../components/viewSwapItems/story";
import accomplishments from "../components/viewSwapItems/accomplishments";
import hobbies from "../components/viewSwapItems/hobbies";

import style from "../style/style";
import layout from "../style/layout"

export default function About() {
  const viewSwapItems = [story, accomplishments, hobbies]

  return (
    <>
      <ParallaxLayer className="bkg1"
      speed={0.5}
      factor={1}>
        <Header />
        <div css={[layout.flex, layout.row, layout.justCent]}>
          <Typewriter
            font='incon'
            fontSize='font3rem'
            tarString="
            hi, i'm quintin.
            "
            bold={[]}
            cursorDisappear={true}
            interval={500}
          />
        </div>
        <div css={[layout.flex, layout.justEnd]}>
          <p css={[layout.margin0, layout.flex, layout.flex50, layout.justCent, style.incon, style.font3rem]}>Tools</p>
        </div>
        <div css={[layout.flex, layout.alignC, layout.justSpbw, layout.row]}>
          <div css={[layout.flex, layout.flex50, layout.justCent]}>
            <ToolsIcons />
          </div>
          <ToolsText />
        </div>
      </ParallaxLayer>

      <ParallaxLayer
      offset={0.8}
      factor={1.5}
      speed={0.2}
      className="bkg2">
        <AboutPhoto />
      </ParallaxLayer>

      <ParallaxLayer
      offset={1.95}
      speed={0.3}
      factor={2}
      className="bkg3"
      css={[layout.flex, layout.alignC, layout.justCent, layout.bottomPadding]}>
        <ViewSwap objList={viewSwapItems} />
      </ParallaxLayer>
    </>
  )
}
