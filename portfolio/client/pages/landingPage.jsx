/** @jsx jsx */
import React from "react";
import { jsx, css } from '@emotion/react'
import { ParallaxLayer } from '@react-spring/parallax'

import Header from "../components/header";
import style from "../style/style";

export default function LandingPage() {
  return (
    <>
      <ParallaxLayer
        className="bkg1"
      >
        <Header />
      </ParallaxLayer>
    </>
  )
}
