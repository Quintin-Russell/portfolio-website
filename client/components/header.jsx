/** @jsx jsx */
import React, { useState } from 'react'
import { jsx, css } from '@emotion/react'

import Menu from './menu'

import style from '../style/style'
import layout from '../style/layout'

const headerCss = [layout.flex, layout.row, layout.justSpbw, style.fade]
const headerTextCss = [style.incon, style.whiteUnderline, style.headerA, style.hoverA]
const aCss = [layout.padding25, layout.marginHalfRem, style.hoverA]

export default function Header(props) {
  const [menuDisplay, setMenuDisplay] = useState(false);

  const label = (props.screenSize > 768)
    ? `<QUINTINRUSSELL/>`
    : `<>QR</>`

  const renderMenu = () => {
    if (menuDisplay) return (
      <>
        <div css={[layout.flex, layout.justEnd]}>
          <div css={[layout.flex, layout.col, layout.justSpbw, layout.alignC, layout.fitContent, layout.menuCont, style.incon, style.borderLight, style.fadeSolid]}>
            <a css={aCss} href="#about">{`-ABOUT-`}</a>
            <a css={aCss} href="#projects">{`-SEE MY WORK-`}</a>
            <a css={aCss}
              href="mailto:quinn.j.russell@gmail.com"
              target="_blank">{`-CONTACT ME-`}</a>
          </div>
        </div>
      </>
    )
  }

  const renderHeaderTxt = (screenSize) => {
    if (screenSize > 768) return (
      <>
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
      </>
    )
  }


  return (
    <>
      <header css={headerCss}>
        <a href=""
          css={style.noUnderline}>
          <h1 css={[style.incon, style.fadeTxt]}>{label}</h1>
        </a>
        <div css={[layout.flex, layout.row, layout.alignC]}>
          {renderHeaderTxt(props.screenSize)}
          <Menu setMenuDisplay={setMenuDisplay}
            menuDisplay={menuDisplay} />
        </div>
      </header>

      {renderMenu()}
    </>
  )
}
