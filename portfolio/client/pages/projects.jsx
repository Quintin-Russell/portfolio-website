/** @jsx jsx */
import React, {useState,
              useEffect} from "react";
import { jsx, css } from '@emotion/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import Footer from "../components/footer";
import Typewriter from "../components/typewriter";
import Project from "../components/projects/project";

import style from "../style/style";
import layout from "../style/layout"
import fetchReq from '../components/functions/fetch'

export default function Projects() {
  const [firstTWCompleted, setFirstTWCompleted] = useState(null)
  const [projects, setProjects] = useState([])

  useEffect(() => {
     fetchReq('/api/projects', setProjects)
  }, [])

  setTimeout(() => {
    setFirstTWCompleted(true)
  }, 4500)


  const render2ndTW = (firstTWCompleted) => {
    if (!firstTWCompleted) return <></>

    return (
      <Typewriter
        font='monts'
        fontSize='font2rem'
        tarString="In all of my projects, I aim to apply new technologies, maintainability, and best practices. Below are samples of some of the projects that I am the most excited about!"
        bold={[]}
        interval={200} />
    )
  }

  const tarString = "I'm your easy-to-work-with partner that can make your ideas become (digital) reality."
  let startSticky = 0.25;
  let endSticky = 4;
  return (
    <>
    <Parallax pages={6.15}>
      <ParallaxLayer
        className="bkg1" />
      <ParallaxLayer
      offset={1}
      factor={1.5}
      className="bkg2" />
      <ParallaxLayer
        offset={4.5}
        factor={1.65}
        className="bkg3">
          <Footer />
      </ParallaxLayer>

      <ParallaxLayer
      speed={0.5}
      factor={1.2}>
        <Header />
        <div css={[layout.flex, layout.row, layout.height100, layout.alignC, layout.justCent]}>
          <div css={[layout.flex, layout.col, layout.flex50]}>
            <p css={[layout.margin0, layout.flex, layout.flex50, layout.justCent, style.incon, style.font3rem]}>Projects</p>
          </div>
          <div css={[layout.flex, layout.col, layout.flex50, layout.marginAuto]}>
            <Typewriter
            font='pfDisp'
            fontSize='font3rem'
            tarString={tarString}
            bold={tarString.split(" ")}
            cursorDisappear={true}
            interval={300}
            />
            {render2ndTW(firstTWCompleted)}
          </div>
        </div>
      </ParallaxLayer>

          {
            projects.map((x,index) => {
              startSticky += 1.25
              return (
                <ParallaxLayer
                  key={index}
                  sticky={{
                    start: startSticky,
                    end: endSticky,
                  }}
                  factor={1}
                  speed={0.75}>
                  <Project project={x}
                    key={x.name}
                    index={index} />
                </ParallaxLayer>
              )

            })
          }

      <ParallaxLayer
      offset={5}
      factor={1}
      css={[layout.flex, layout.justCent, layout.alignC, layout.width80]}>
        {/* <div css={[layout.col, layout.width80, layout.flex, layout.justCent, layout.alignC, style.fade, style.borderLight]}>
          <p css={[style.monts, style.textCent, style.font2rem]}>
          Do you have an idea of What you want to create?
          A new feature for your website?
          A new way for your clients to communicate with you?
          I would love to help out in the design and build process.
          Click the link below and let's make your idea a reality!</p>
            <a href=" #contact">
              <button css={[layout.button]}>Contact Me</button>
            </a>
        </div> */}
          <div css={[layout.flex, layout.row, layout.width80, layout.alignC, layout.justCent]}>
            <div css={[layout.flex, layout.col, layout.flex50, style.textCent]}>
            <p css={[layout.margin0, layout.flex, layout.flex50, layout.justCent, style.monts, style.font1rem]}>
                Do you have an idea of what you want to create? <br />
                A new feature for your website?
                A new way for your clients to communicate with you?
                I would love to help out in the design and build process.

            </p>
              <p css={[layout.flex, layout.flex50, layout.justCent, style.monts, style.font1rem]}>Click to the right and let's make your idea a reality!</p>
          </div>
            <div css={[layout.flex, layout.col, layout.flex50, layout.marginAuto]}>
              <a
                css={[layout.marginAuto, style.incon, style.font3rem, layout.padding25, style.hoverA]}
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
