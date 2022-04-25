/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

export default function Header() {
  const [screenSize, setScreenSize] = useState(screen.width);

  $(window).on('resize', () => setScreenSize(screen.width))

  const emotionA = css`
  text-decoration: underline;
  color: #fff;
  font-family: Inconsolata, monospace;
  font-size: 1rem;
  `

  const label = (screenSize > 768)
    ? `<QUINTINRUSSELL/>`
    : `<>QR</>`

  return (
    <>
    <header className='flex row just-spbw'>
      <a href=""
      className='no-underline'>
       <h1 className='fade-txt incon'>{label}</h1>
      </a>
        <div className="row flex align-c">
        <a href="contact"
        css={emotionA}>
          Let's Talk
        </a>
        <a href="">
        </a>
        <a href="">
        </a>
      </div>

    </header>
    </>
  )
}
