/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import Typewriter from "../components/typewriter";
import style from "../style/style";

// ideas for continuous typewriter:
  // attribute = array object with props => typewriter reads array in order

export default function LandingPage() {
  return (
    <>
      <ParallaxLayer
        className="bkg1"
      >
        <Header />
        {/* <Typewriter
        font='pfDisp'
        tarString="
        I build intelligent and impactful applications that work.
        "
          bold={["I", "build", "intelligent", "and", "impactful", "applications", "that", "work."]}
        /> */}
        <Typewriter
        font='monts'
        tarString="At my core, I am a constant asker of why? and how did you do that?.
                  On the outside, I use React.js, jQuery, Express.js, PostgreSQL, Python,
                  and more to create web-based applications. I am actively looking for
                  opportunities that allow me to learn everyday and improve in what I know."
        bold={['why?', 'how', 'did', 'you', 'do', 'that?.', 'React.js,', 'jQuery,', 'Express.js,', 'PostgreSQL,', 'Python,']}/>
      </ParallaxLayer>
    </>
  )
}
