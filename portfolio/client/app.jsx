import React, {useState} from 'react';
import { ParallaxLayer, Parallax } from '@react-spring/parallax'
import $ from 'jquery'

import parseRoute from './parse-route';

import LandingPage from './pages/landingPage'
import Header from './components/header'

export default function App(props) {
  const [hash, setHash] = useState(parseRoute(window.location.hash))

  const landingPage = (hash.path === '')
      ? (
          <LandingPage/>
          )
      : <></>

  return (
    <>
    <Parallax pages={1}>
      {landingPage}
    </Parallax>
    </>
  )

}
