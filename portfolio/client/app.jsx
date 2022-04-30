import React, {useState} from 'react';
import { ParallaxLayer, Parallax } from '@react-spring/parallax'
import $ from 'jquery'

import parseRoute from './parse-route';

import layout from './style/layout';

import Footer from './components/footer';
import LandingPage from './pages/landingPage'
import About from './pages/about';

export default function App(props) {
  const [hash, setHash] = useState(parseRoute(window.location.hash))

  $(document).title = '../server/public/images/flavicon/favicn.ico'
  $(window).on('hashchange',() => setHash(parseRoute(window.location.hash)))

  const determinePage = (hash) => {
    if (hash.path === 'about') return <About />
    return <LandingPage />
  }

  const determinePageNumber = (hash) => {
    if (hash.path === 'about') return 3
    return 1
  }



  return (
    <>
    <Parallax
    pages={determinePageNumber(hash)}
    css={layout.contentWrap}>
      {determinePage(hash)}
    </Parallax>
    <Footer />
    </>
  )

}
