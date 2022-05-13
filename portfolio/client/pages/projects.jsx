/** @jsx jsx */
import React, {useState,
              useEffect} from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
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

  return (
    <>
      <ParallaxLayer
        speed={0.75}
        className="bkg1">
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
      <ParallaxLayer
        offset={1}
        speed={0.5}
        className="bkg2">
          {
            projects.map((x,index) => {
              return <Project project={x}
                              key={x.name}
                              index={index} />
            })
          }

      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.3}
        className="bkg3">

      </ParallaxLayer>
    </>

  )
}
