/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, css } from '@emotion/react'
import { VscListSelection } from 'react-icons/vsc'
import $ from 'jquery'

import Menu from './menu'

import style from '../style/style'
import layout from '../style/layout'

const headerCss = [style.fade, layout.flex, layout.row, layout.justSpbw]
const headerTextCss = [style.incon, style.whiteUnderline, style.headerA, style.hoverA]
const aCss = [style.hoverA, layout.padding25, layout.marginHalfRem]

export default function Header() {
  const [screenSize, setScreenSize] = useState(screen.width);
  const [menuDisplay, setMenuDisplay] = useState(false);

  $(window).on('resize', () => setScreenSize(screen.width))

  const label = (screenSize > 768)
    ? `<QUINTINRUSSELL/>`
    : `<>QR</>`

  const renderMenu = () => {
    if (menuDisplay) return (
        <>
        <div css={[layout.flex, layout.justEnd]}>
            <div css={[style.incon, layout.flex, layout.col, layout.justSpbw, layout.alignC, layout.fitContent, layout.menuCont, style.borderLight, style.fade]}>
            <a css={aCss} href="#about">{`-ABOUT-`}</a>
            <a css={aCss} href="#projects">{`-SEE MY WORK-`}</a>
            <a css={aCss} href="#contact">{`-CONTACT ME-`}</a>
            </div>
          </div>
        </>
      )
    }


  return (
    <>
    <header css={headerCss}>
      <a href=""
      css={style.noUnderline}>
       <h1 css={[style.fadeTxt, style.incon]}>{label}</h1>
      </a>
        <div css={[layout.flex, layout.row, layout.alignC]}>
        <a href="#contact"
            css={headerTextCss}
            >
          Let's Talk
        </a>
        <a href="https://github.com/Quintin-Russell/Quintin-Russell/blob/main/Quintin%20Russell%20Resume.pdf"
        target="_blank"
            css={headerTextCss}>
          Resume
        </a>
          <Menu setMenuDisplay={setMenuDisplay}
                menuDisplay={menuDisplay}/>
      </div>
    </header>

        {renderMenu()}
        </>
  )
}
