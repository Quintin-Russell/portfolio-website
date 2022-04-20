import React, {useState} from 'react';
import { ParallaxLayer, Parallax } from '@react-spring/parallax'
import $ from 'jquery'

import parseRoute from './parse-route';

import LandingPage from './pages/landingPage'
import Header from './components/header'

export default function App(props) {
  const [hash, setHash] = useState(parseRoute(window.location.hash))
  console.log('hash:', hash)

  const loadPage = (hash) => {
    if (hash.path === '') {
      return <LandingPage />
    }
  }

  const landingPage = (hash.path === '')
      ? (<>
        <Parallax pages={1}>
          <LandingPage/>
        </Parallax>
      </>)
      : <></>

  return (
    <>
      <Header />
      {landingPage}
    </>
  )

}
