/** @jsx jsx */
import React, {useState,
                useEffect} from 'react';
import { ParallaxLayer, Parallax } from '@react-spring/parallax'
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import parseRoute from './parse-route';

import layout from './style/layout';

import Footer from './components/footer';
import LandingPage from './pages/landingPage'
import About from './pages/about';

export default function App(props) {
  const determinePageNumber = (hash) => {
    if (hash.path === 'about') return 3
    return 1
  }

  const [hash, setHash] = useState(parseRoute(window.location.hash))
  const [pgNum, setPgNum] = useState(determinePageNumber(hash))

  $(document).title = '../server/public/images/flavicon/favicn.ico'

  useEffect(() => {
    $(window).on('hashchange', () => {
      const newHash = parseRoute(window.location.hash)
      setHash(newHash)
      return () => setPgNum(determinePageNumber(newHash))
      })
  }, [])

  const determinePage = (hash) => {
    if (hash.path === 'about') return <About />
    return <LandingPage />
  }

  return (
    <>
    <Parallax
        pages={3}
    >
      {determinePage(hash)}
    </Parallax>
    <Footer />

    </>
  )

}
