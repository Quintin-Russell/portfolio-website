/** @jsx jsx */
import React, { useState } from "react";
import { jsx, css } from '@emotion/react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import $ from 'jquery'

import Header from "../components/header";
import Footer from "../components/footer";
import Typewriter from "../components/typewriter";

import style from "../style/style";
import layout from "../style/layout"

const jobDesc = [style.incon, style.light, layout.padding25]

export default function LandingPage() {
  const [screenSize, setScreenSize] = useState(screen.width);
  const [firstTWCompleted, setFirstTWCompleted] = useState(null)

  $(window).on('resize', () => setScreenSize(screen.width))

  setTimeout(() => {
    setFirstTWCompleted(true)
  }, 4400)

  const determinePgNum = (screenSize) => {
    if (screenSize > 768) return 3.5
    return 2.5
  }

  const render2ndTW = (firstTWCompleted) => {
    if (!firstTWCompleted) return <></>

    return (
      <Typewriter
        font='monts'
        fontSize={(screenSize > 768) ? 'font3rem' : 'font2halfrem'}
        tarString="At my core, I am a constant asker of why? and how did you do that?.
                  On the outside, I use React.js, jQuery, Express.js, PostgreSQL, Python,
                  and more to create web-based applications. I am actively looking for
                  opportunities that allow me to learn everyday and improve in what I know."
        bold={['why?', 'how', 'did', 'you', 'do', 'that?.', 'React.js,', 'jQuery,', 'Express.js,', 'PostgreSQL,', 'Python,']}
        interval={200} />
    )
  }

  return (
    <>
      <Parallax pages={2.5}>

        <ParallaxLayer
          css={[layout.bkg1]}
          factor={1}>
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
          css={[layout.bkg2]}
          offset={1}
          factor={1.5}>
          <Footer />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.5}
          speed={0.75}
          factor={2}
        >
          <div css={layout.margin1rem}>
            <div css={(screenSize > 768) ? [...jobDesc, style.font3rem] : [...jobDesc, style.font2halfrem]}>
              <span css={style.landingPgTxt_or}>{`<`}</span><span css={style.landingPgTxt_bl}>{`QuintinRussell`}</span>
            </div>
            <div css={(screenSize > 768) ? [...jobDesc, style.font3rem] : [...jobDesc, style.font2halfrem]}>
              <span css={style.landingPgTxt_bl}>{`profession =“software-engineer”`}</span>
            </div>
            <div css={(screenSize > 768) ? [...jobDesc, style.font3rem] : [...jobDesc, style.font2halfrem]}>
              <span css={style.landingPgTxt_bl}>{`tools=[“JavaScript”, “Python”, “CSS”, “HTML”]`}</span>
            </div>
            <div css={(screenSize > 768) ? [...jobDesc, style.font3rem, style.landingPgTxt_or] : [...jobDesc, style.font2halfrem, style.landingPgTxt_or]}>
              {`>`}
            </div>

          </div>

          <Typewriter
            font='pfDisp'
            fontSize={(screenSize > 768) ? 'font3rem' : 'font2halfrem'}
            tarString="
          I build intelligent and impactful applications that work.
          "
            bold={["I", "build", "intelligent", "and", "impactful", "applications", "that", "work."]}
            cursorDisappear={true}
            interval={400}
          />

          {
            render2ndTW(firstTWCompleted)
          }
          <div css={(screenSize > 768) ? [...jobDesc, layout.margin1rem, style.font3rem] : [...jobDesc, layout.margin1rem, style.font2halfrem]}>
            <span css={style.landingPgTxt_or}>{`</`}</span><span css={style.landingPgTxt_bl}>{`QuintinRussell`}</span><span css={style.landingPgTxt_or}>{`>`}</span>
          </div>
        </ParallaxLayer>

      </Parallax>
    </>
  )
}
