/** @jsx jsx */
import React, {useState,
                useEffect} from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'
import $ from 'jquery'

import Header from "../components/header";
import Typewriter from "../components/typewriter";
import style from "../style/style";
import layout from "../style/layout"

export default function LandingPage() {
  const [firstTWCompleted, setFirstTWCompleted] = useState(null)

  setTimeout(() => {
      setFirstTWCompleted(true)
    }, 2500)


  const render2ndTW = (firstTWCompleted) => {
    if (!firstTWCompleted) return <></>

    return (
      <Typewriter
        font='monts'
        tarString="At my core, I am a constant asker of why? and how did you do that?.
                  On the outside, I use React.js, jQuery, Express.js, PostgreSQL, Python,
                  and more to create web-based applications. I am actively looking for
                  opportunities that allow me to learn everyday and improve in what I know."
        bold={['why?', 'how', 'did', 'you', 'do', 'that?.', 'React.js,', 'jQuery,', 'Express.js,', 'PostgreSQL,', 'Python,']} />
    )
  }

  return (
    <>
      <ParallaxLayer
        className="bkg1"
      >
        <Header />
        <div css={layout.margin1rem}>
          <div css={[style.incon, style.light, layout.padding25, style.landingPgTxtSize]}>
            <span css={style.landingPgTxt_or}>{`<`}</span><span css={style.landingPgTxt_bl}>{`QuintinRussell`}</span>
          </div>
        <div css={[style.incon, style.light, layout.padding25, style.landingPgTxtSize]}>
              <span css={style.landingPgTxt_bl}>{`profession =“software-engineer”`}</span>
            </div>
        <div css={[style.incon, style.light, layout.padding25, style.landingPgTxtSize]}>
              <span css={style.landingPgTxt_bl}>{`tools=[“JavaScript”, “Python”, “CSS”, “HTML”]`}</span>
            </div>
        <div css={[style.incon, style.light, layout.padding25, style.landingPgTxtSize, style.landingPgTxt_or]}>{`>`}</div>

        </div>

        <Typewriter
          font='pfDisp'
          tarString="
          I build intelligent and impactful applications that work.
          "
          bold={["I", "build", "intelligent", "and", "impactful", "applications", "that", "work."]}
          cursorDisappear={true}
        />

        {
          render2ndTW(firstTWCompleted)
        }
        <div css={[layout.margin1rem, style.incon, style.light, layout.padding25, style.landingPgTxtSize]}>
          <span css={style.landingPgTxt_or}>{`<`}</span><span css={style.landingPgTxt_bl}>{`QuintinRussell`}</span><span css={style.landingPgTxt_or}>{`/>`}</span>
        </div>
      </ParallaxLayer>
    </>
  )
}
