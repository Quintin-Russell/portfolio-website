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
      <h1 className='fade-txt incon'>{label}</h1>
    </header>
    </>
  )
}
