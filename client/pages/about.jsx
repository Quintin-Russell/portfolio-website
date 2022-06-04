/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import Footer from "../components/footer";
import Typewriter from "../components/typewriter";
import ToolsText from "../components/tools/toolsText";
import ToolsIcons from "../components/tools/toolsIcons";
import AboutPhoto from "../components/about/aboutPhoto";
import ViewSwap from "../components/viewSwap";

import lessThan768 from "../components/functions/lessthan768";
import story from "../components/viewSwapItems/story";
import timeline from "../components/viewSwapItems/timeline";
import hobbies from "../components/viewSwapItems/hobbies";

import style from "../style/style";
import layout from "../style/layout"

export default function About(props) {

  const viewSwapItems = [story, timeline, hobbies]

  return (
    <>

      <Parallax
        pages={4.25}>

        <ParallaxLayer
          css={[layout.bkg1]}
          factor={1}>
          <Header screenSize={props.screenSize} />
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
          css={[layout.bkg2]} />

        <ParallaxLayer
          offset={2.7}
          factor={1.55}
          css={[layout.bkg3]}>
          <Footer />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.5} //og = 0.5
          factor={1.5}
          speed={0.75}>
          <div css={(!lessThan768(props.screenSize)) ? [layout.flex, layout.justEnd] : [layout.flex, layout.justCent]}>
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
          offset={1.25}
          factor={1.75}
          speed={0.5}>
          <AboutPhoto screenSize={props.screenSize} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.2}
          speed={0.3}
          factor={2}
          css={[layout.flex, layout.alignC, layout.justCent, layout.bottomPadding]}>
          <ViewSwap
            screenSize={props.screenSize}
            objList={viewSwapItems} />
        </ParallaxLayer>

      </Parallax>
    </>
  )
}
