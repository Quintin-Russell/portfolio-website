import React from "react";
import { ParallaxLayer } from '@react-spring/parallax'
import Header from "../components/header";

export default function LandingPage() {
  return (
    <>
      <ParallaxLayer
        className='bkg-1'
      >
        <Header />
      </ParallaxLayer>
    </>
  )
}
