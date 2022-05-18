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

import style from "../style/style";
import layout from "../style/layout"

export default function Contact() {
  return (
    <>
    <Parallax
    pages={3}
    >
      <ParralaxLayer
      className="bkg1" />
      <ParralaxLayer
      offset={1}
        className="bkg2" />
      <ParralaxLayer
          offset={2}
        className="bkg3" />
    </Parallax>
    </>
  )
}
