import React, { useState } from 'react'
import $ from 'jquery'

export default function Header() {
  const [screenSize, setScreenSize] = useState(screen.width);

  $(window).on('resize', () => setScreenSize(screen.width))

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
        className='white-underline header-a incon'>
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
