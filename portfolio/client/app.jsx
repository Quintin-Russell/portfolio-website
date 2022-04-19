import React, {useState} from 'react';
import { ParallaxLayer, Parallax } from '@react-spring/parallax'
import $ from 'jquery'

import parseRoute from './parse-route';

import LandingPage from './pages/landingPage'

export default function App(props) {
  const [hash, setHash] = useState(parseRoute(window.location.hash))
  console.log('hash:', hash)

  const loadPage = (hash) => {
    if (hash.path === '') {
      return <LandingPage />
    }
  }

  if (hash.path === '') return (
    <>
      <Parallax pages={1}>
        <LandingPage/>
      </Parallax>
    </>
  )
}
