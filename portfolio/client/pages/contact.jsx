/** @jsx jsx */
import React, {
  useState,
  useEffect
} from "react";
import { jsx, css } from '@emotion/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import Footer from "../components/footer";
import Typewriter from "../components/typewriter";
import ViewSwap from "../components/viewSwap";

import contactForm from "../components/viewSwapItems/contactForm";
import contactInformation from "../components/viewSwapItems/contactInformation";
import style from "../style/style";
import layout from "../style/layout"

export default function Contact() {
  const tarString = `Let's Talk`
  const viewSwapItems = [contactForm, contactInformation]
  return (
    <>
    <Parallax
    pages={4}
    >
      <ParallaxLayer
        factor={1}
        className="bkg1">
          <Header />
      </ParallaxLayer>

      <ParallaxLayer
        factor={1}
        offset={1}
        className="bkg2" />

      <ParallaxLayer
        factor={2}
        offset={2}
        className="bkg3">
          <Footer />
      </ParallaxLayer>

        <ParallaxLayer
          offset={0.5} // original 0.1
          speed={0.5}
          factor={0.5} //original 1.2
          >

          <div css={[layout.flex, layout.rowMobile, layout.height100, layout.alignC, layout.justCent]}>
            <div css={[layout.flex, layout.col, layout.flex50]}>
              <p css={[layout.margin0, layout.flex, layout.flex50, layout.justCent, style.incon, style.font3rem]}>Contact Me</p>
            </div>
            <div css={[layout.flex, layout.col, layout.flex50, layout.marginAuto]}>
              <Typewriter
                font='pfDisp'
                fontSize='font3rem'
                tarString={tarString}
                bold={tarString.split(" ")}
                interval={300}
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{
          start: 1.3,
          stop: 3
        }}
        speed={0.2}>
          <div css={[layout.flex, layout.justCent, layout.alignC]}>
            <ViewSwap objList={viewSwapItems}/>
          </div>

        </ParallaxLayer>

    </Parallax>
    </>
  )
}
