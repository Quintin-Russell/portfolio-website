/** @jsx jsx */
import React, {useState,
              useEffect} from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import Footer from "../components/footer";
import Typewriter from "../components/typewriter";
import style from "../style/style";
import layout from "../style/layout"

export default function About() {
  return (
    <>
      <ParallaxLayer className="bkg1">
        <Typewriter
          font='incon'
          tarString="
          hi, i'm quintin.
          "
          bold={[]}
        />
      </ParallaxLayer>
      <ParallaxLayer className="bkg2">

      </ParallaxLayer>
      <ParallaxLayer className="bkg3">

      </ParallaxLayer>
    </>
  )
}
