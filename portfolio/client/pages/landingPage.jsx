/** @jsx jsx */
import React, {useState,
                useEffect} from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import Typewriter from "../components/typewriter";
import style from "../style/style";
import layout from "../style/layout"

export default function LandingPage() {
  const [firstTWCompleted, setFirstTWCompleted] = useState(null)

  setTimeout(() => {
      setFirstTWCompleted(true)
    }, 4400)


  const render2ndTW = (firstTWCompleted) => {
    if (!firstTWCompleted) return <></>

    return (
      <Typewriter
        font='monts'
        fontSize='font3rem'
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
      <ParallaxLayer
      className="bkg1">
        <Header />
        <div css={layout.margin1rem}>
          <div css={[style.incon, style.light, layout.padding25, style.font3rem]}>
            <span css={style.landingPgTxt_or}>{`<`}</span><span css={style.landingPgTxt_bl}>{`QuintinRussell`}</span>
          </div>
          <div css={[style.incon, style.light, layout.padding25, style.font3rem]}>
              <span css={style.landingPgTxt_bl}>{`profession =“software-engineer”`}</span>
            </div>
          <div css={[style.incon, style.light, layout.padding25, style.font3rem]}>
              <span css={style.landingPgTxt_bl}>{`tools=[“JavaScript”, “Python”, “CSS”, “HTML”]`}</span>
            </div>
          <div css={[style.incon, style.light, layout.padding25, style.font3rem, style.landingPgTxt_or]}>{`>`}</div>

        </div>

        <Typewriter
          font='pfDisp'
          fontSize='font3rem'
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
        <div css={[layout.margin1rem, style.incon, style.light, layout.padding25, style.font3rem]}>
          <span css={style.landingPgTxt_or}>{`</`}</span><span css={style.landingPgTxt_bl}>{`QuintinRussell`}</span><span css={style.landingPgTxt_or}>{`>`}</span>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
      offset={1}
      className="bkg2">

      </ParallaxLayer>
      <ParallaxLayer
      offset={2}
      className="bkg3">

      </ParallaxLayer>
    </>
  )
}
