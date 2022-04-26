/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, css } from '@emotion/react'
import { VscListSelection } from 'react-icons/vsc'
import $ from 'jquery'

import style from '../style/style'
import layout from '../style/layout'

export default function Header() {
  const [screenSize, setScreenSize] = useState(screen.width);

  $(window).on('resize', () => setScreenSize(screen.width))

  const label = (screenSize > 768)
    ? `<QUINTINRUSSELL/>`
    : `<>QR</>`

  return (
    <>
    <header css={[style.fade, layout.flex, layout.row, layout.justSpbw]}>
      <a href=""
      css={style.noUnderline}>
       <h1 css={[style.fadeTxt, style.incon]}>{label}</h1>
      </a>
        <div css={[layout.flex, layout.row, layout.alignC]}>
        <a href="contact"
            css={[style.incon, style.whiteUnderline, style.headerA]}
            >
          Let's Talk
        </a>
        <a href="https://github.com/Quintin-Russell/Quintin-Russell/blob/main/Quintin%20Russell%20Resume.pdf"
        target="_blank"
        css={[style.incon, style.whiteUnderline, style.headerA]}>
          Resume
        </a>
        <div
        css={[style.headerA, layout.flex, layout.alignC]}>
          <VscListSelection css={style.menuIcon} />
        </div>
      </div>

    </header>
    </>
  )
}
