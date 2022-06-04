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
import Project from "../components/projects/project";

import style from "../style/style";
import layout from "../style/layout"
import fetchReq from '../components/functions/fetch'

const endText = [layout.flex, layout.justCent, layout.flex50, style.font1rem, style.monts]
const col50Cont = [layout.flex, layout.col, layout.flex50]

export default function Projects(props) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchReq('/api/projects', setProjects)
  }, [])

  setTimeout(() => {
    setFirstTWCompleted(true)
  }, 3000)

  const tarString = "I'm your easy-to-work-with partner that can make your ideas become (digital) reality."
  let startSticky = 0.25;
  let endSticky = 2.5;
  return (
    <>
      <Parallax pages={4.75}>

        <ParallaxLayer
          factor={1.25}
          css={[layout.bkg1]} />

        <ParallaxLayer
          offset={1.25}
          factor={1.5}
          css={[layout.bkg2]} />

        <ParallaxLayer
          offset={2.75}
          factor={2}
          css={[layout.bkg3]}>
          <Footer />
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          factor={1.2}>
          <Header screenSize={props.screenSize} />
          <div css={[layout.flex, layout.rowMobile, layout.alignC, layout.justCent, layout.height100, layout.topMargin]}>
            <div css={col50Cont}>
              <p css={[layout.flex, layout.flex50, layout.justCent, layout.margin0, style.font3rem, style.incon]}>Projects</p>
            </div>
            <div css={[...col50Cont, layout.marginAuto, layout.smallSidePadding]}>
              <Typewriter
                font='pfDisp'
                fontSize='font3rem'
                tarString={tarString}
                bold={tarString.split(" ")}
                cursorDisappear={true}
                interval={200}
              />
            </div>
          </div>
        </ParallaxLayer>

        {
          projects.map((x, index) => {
            startSticky += 1.05
            return (
              <ParallaxLayer
                key={index}
                sticky={{
                  start: startSticky,
                  end: endSticky
                }}
                factor={1}
                speed={0.75}>
                <Project
                  screenSize={props.screenSize}
                  project={x}
                  key={x.name}
                  index={index} />
              </ParallaxLayer>
            )

          })
        }

        <ParallaxLayer
          offset={3.75}
          factor={0.8}
          css={[layout.flex, layout.alignC, layout.justCent, layout.width80]}>
          <div css={[layout.flex, layout.rowMobile, layout.alignC, layout.justCent, layout.width80]}>
            <div css={[...col50Cont, style.textCent]}>
              <p css={[...endText, layout.margin0]}>
                Do you have an idea of what you want to create? <br />
                A new feature for your website?
                A new way for your clients to communicate with you?
                I would love to help out in the design and build process.

              </p>
              <p css={endText}>Click to the right and let's make your idea a reality!</p>
            </div>
            <div css={[...col50Cont, layout.marginAuto]}>
              <a
                css={[layout.marginAuto, layout.padding25, style.font3rem, style.incon, style.hoverA]}
                href=" #contact">
                -Contact Me-
              </a>
            </div>
          </div>
        </ParallaxLayer>

      </Parallax>

    </>

  )
}
