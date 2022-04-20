import React, { useState } from 'react'
import $ from 'jquery'

export default function Header() {
  const [screenSize, setScreenSize] = useState(window.innerHeight);

  $(window).on('resize', () => setScreenSize(window.innerHeight))
  return (
    <>
    <header className='flex row just-spbw'>
      <h1></h1>
    </header>
    </>
  )
}
