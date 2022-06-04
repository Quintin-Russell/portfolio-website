/** @jsx jsx */
import React from "react";
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

const cont50 = [layout.flex, layout.col, layout.flex50]

export default function Contact(props) {
  const tarString = `Let's Talk`
  const viewSwapItems = [contactForm, contactInformation]
  return (
    <>
      <Parallax
        pages={4}
      >

        <ParallaxLayer
          factor={1}
          css={[layout.bkg1]}>
          <Header screenSize={props.screenSize} />
        </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={1}
          css={[layout.bkg2]} />

        <ParallaxLayer
          factor={2}
          offset={2}
          css={[layout.bkg3]}>
          <Footer />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.5}
          speed={0.5}
          factor={0.5}
        >
          <div css={[layout.flex, layout.rowMobile, layout.height100, layout.alignC, layout.justCent]}>
            <div css={cont50}>
              <p css={[...cont50, layout.justCent, layout.margin0, style.textCent, style.font3rem, style.incon]}>Contact Me</p>
            </div>
            <div css={[...cont50, layout.marginAuto]}>
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
          <div css={[layout.flex, layout.alignC, layout.justCent]}>
            <ViewSwap objList={viewSwapItems} />
          </div>
        </ParallaxLayer>

      </Parallax>
    </>
  )
}
