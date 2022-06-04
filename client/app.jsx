/** @jsx jsx */
import React, {
  useState,
  useEffect
} from 'react';
import { ParallaxLayer, Parallax } from '@react-spring/parallax'
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import parseRoute from './parse-route';

import layout from './style/layout';

import Footer from './components/footer';
import LandingPage from './pages/landingPage'
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

export default function App(props) {
  const [hash, setHash] = useState(parseRoute(window.location.hash))
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);


  $(document).title = '../server/public/images/flavicon/favicn.ico'
  $(window).on('resize', () => {
    setScreenSize(window.innerWidth)
    setScreenHeight(window.innerHeight)
  })

  useEffect(() => {
    $(window).on('hashchange', () => {
      const newHash = parseRoute(window.location.hash)
      setHash(newHash)
    })
  }, [])

  const determinePage = (hash) => {
    if (hash.path === 'about') return <About screenSize={screenSize} />
    if (hash.path === 'projects') return <Projects screenSize={screenSize} />
    if (hash.path === 'contact') return <Contact screenSize={screenSize} />
    return <LandingPage screenHeight={screenHeight} screenSize={screenSize} />
  }

  return (
    <>
      {determinePage(hash)}
    </>
  )

}
