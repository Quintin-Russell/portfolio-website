/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import style from '../../style/style'
import layout from '../../style/layout'

import ViewSwapItem from "./viewSwapConstructor"
import {
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineMail
} from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { GoLocation } from 'react-icons/go'

const rowCont = [layout.flex, layout.row, layout.alignC]
const aCss = [layout.flex, layout.alignC, layout.leftPadding, style.font1halfrem, style.hoverA]

const contactInfo = [
  <div css={rowCont}>
    <span>Location: Southern California, USA </span>
    <span css={[style.font1halfrem]}>
      <GoLocation />
    </span>
  </div>,
  <div css={rowCont}>
    <span>Email  </span>
    <span>
      <a css={aCss}
        href="mailto:quinn.j.russell@gmail.com"
        target="_blank">
        <AiOutlineMail />
      </a>
    </span>
  </div>,
  <div css={rowCont}>
    <span>Phone  </span>
    <span>
      <a css={aCss}
        href="tel:+1-760-456-9726">
        <AiOutlinePhone />
      </a>
    </span>
  </div>,
  <div css={rowCont}>
    <span>LinkedIn  </span>
    <span>
      <a css={aCss}
        href="https://www.linkedin.com/in/qjrussell/"
        target="_blank"><AiOutlineLinkedin /></a>
    </span>
  </div>,
  <div css={rowCont}>
    <span>GitHub  </span>
    <span>
      <a css={aCss}
        href="https://github.com/Quintin-Russell"
        target="_blank"><VscGithub /></a>
    </span>
  </div>,
  <div css={rowCont}>
    <span>For more contact Information, please see my resume</span>
    <span>
      <a css={aCss}
        href="https://github.com/Quintin-Russell/Quintin-Russell/blob/main/Quintin%20Russell%20Resume.pdf"
        target="_blank"><HiOutlineDocumentText /></a>
    </span>
  </div>

]

export default new ViewSwapItem('Contact Information', 'list', 'contact', contactInfo)
