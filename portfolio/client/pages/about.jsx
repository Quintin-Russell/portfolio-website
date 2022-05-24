/** @jsx jsx */
import React, {useState} from "react";
import { jsx, css } from '@emotion/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import $ from 'jquery'

import Header from "../components/header";
import Footer from "../components/footer";
import Typewriter from "../components/typewriter";
import ToolsText from "../components/tools/toolsText";
import ToolsIcons from "../components/tools/toolsIcons";
import AboutPhoto from "../components/about/aboutPhoto";
import ViewSwap from "../components/viewSwap";

import story from "../components/viewSwapItems/story";
import timeline from "../components/viewSwapItems/timeline";
import hobbies from "../components/viewSwapItems/hobbies";

import style from "../style/style";
import layout from "../style/layout"

export default function About() {
  const [screenSize, setScreenSize] = useState(screen.width);

  $(window).on('resize', () => setScreenSize(screen.width))

  const viewSwapItems = [story, timeline, hobbies]

  return (
    <>

    <Parallax
    pages={4.25}>

      <ParallaxLayer
        className="bkg1"
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
              interval={500}
            />
          </div>
        </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        factor={1.5}
        className="bkg2" />
      <ParallaxLayer
        offset={2.7}
        factor={1.55}
        className="bkg3">
          <Footer />
        </ParallaxLayer>

  <ParallaxLayer
  offset={0.5}
  factor={1.5}
  speed={2}>
          <div css={(screenSize > 768) ? [layout.flex, layout.justEnd] : [layout.flex, layout.justCent]}>
      <p css={[layout.margin0, layout.flex, layout.flex50, layout.justCent, style.incon, style.font3rem]}>Tools</p>
    </div>
    <div css={[layout.flex, layout.alignC, layout.justSpbw, layout.rowMobile]}>
      <div css={[layout.flex, layout.flex50, layout.justCent]}>
        <ToolsIcons />
      </div>
      <ToolsText />
    </div>
  </ParallaxLayer>

  <ParallaxLayer
  offset={1}
  factor={1.75}
  speed={0.5}>
    <AboutPhoto />
  </ParallaxLayer>

  <ParallaxLayer
    offset={2.2}
    speed={0.3}
    factor={2}
    css={[layout.flex, layout.alignC, layout.justCent, layout.bottomPadding]}>
      <ViewSwap objList={viewSwapItems} />
  </ParallaxLayer>

    </Parallax>
    </>
  )
}
