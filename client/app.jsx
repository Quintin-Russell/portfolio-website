/** @jsx jsx */
import React, { useState, useEffect, createContext } from 'react'
import { ParallaxLayer, Parallax } from '@react-spring/parallax'
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import ScreenSizeContext from './context/create-context'
import parseRoute from './parse-route'

import layout from './style/layout'

import Footer from './components/footer'
import LandingPage from './pages/landing-page'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'

export default function App(props) {
    const [hash, setHash] = useState(parseRoute(window.location.hash))
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    $(document).title = '../server/public/images/flavicon/favicn.ico'
    $(window).on('resize', () => {
        const width = window.innerWidth
        const height = window.innerHeight
        setScreenSize({ width, height })
    })

    useEffect(() => {
        $(window).on('hashchange', () => {
            const newHash = parseRoute(window.location.hash)
            setHash(newHash)
        })
    }, [])

    const determinePage = (hash) => {
        // if (hash.path === 'about') return <About screenSize={screenSize} />
        // if (hash.path === 'projects') return <Projects screenSize={screenSize} />
        // if (hash.path === 'contact') return <Contact screenSize={screenSize} />
        // return <LandingPage screenHeight={screenHeight} screenSize={screenSize} />
        //using context custom hook
        if (hash.path === 'about') return <About />
        if (hash.path === 'projects') return <Projects />
        if (hash.path === 'contact') return <Contact />
        return <LandingPage />
    }

    return (
        <>
            <ScreenSizeContext.Provider value={screenSize}>
                {determinePage(hash)}
            </ScreenSizeContext.Provider>
        </>
    )
}
