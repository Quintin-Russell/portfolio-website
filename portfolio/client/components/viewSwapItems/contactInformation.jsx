/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import style from '../../style/style'
import layout from '../../style/layout'

import ViewSwapItem from "./viewSwapConstructor"
import { AiOutlineLinkedin,
        AiOutlinePhone,
        AiOutlineMail } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { GoLocation } from 'react-icons/go'

const contactInfo = [
  <div css={[layout.flex, layout.row, layout.alignC]}>
    <span>Location: Southern California, USA </span>
    <span css={[style.font1halfrem]}
      style={{ paddingLeft: '1rem' }}>
      <GoLocation />
    </span>
  </div>,
  <div css={[layout.flex, layout.row, layout.alignC]}>
    <span>Email  </span>
    <span>
      <a css={[style.hoverA, layout.flex, layout.alignC, style.font1halfrem]}
      style={{ paddingLeft: '1rem' }}
      href="mailto:quinn.j.russell@gmail.com"
      target="_blank">
        <AiOutlineMail />
      </a>
    </span>
  </div>,
  <div css={[layout.flex, layout.row, layout.alignC]}>
    <span>Phone  </span>
    <span>
      <a css={[style.hoverA, layout.flex, layout.alignC, style.font1halfrem]}
        style={{ paddingLeft: '1rem' }}
        href="tel:+1-760-456-9726">
        <AiOutlinePhone />
      </a>
    </span>
  </div>,
  <div css={[layout.flex, layout.row, layout.alignC]}>
    <span>LinkedIn  </span>
    <span>
      <a css={[style.hoverA, layout.flex, layout.alignC, style.font1halfrem]}
        style={{ paddingLeft: '1rem' }}
        href="https://www.linkedin.com/in/qjrussell/"
        target="_blank"><AiOutlineLinkedin /></a>
    </span>
  </div>,
  <div css={[layout.flex, layout.row, layout.alignC]}>
    <span>GitHub  </span>
    <span>
      <a css={[style.hoverA, layout.flex, layout.alignC, style.font1halfrem]}
        style={{ paddingLeft: '1rem' }}
        href="https://github.com/Quintin-Russell"
        target="_blank"><VscGithub /></a>
    </span>
  </div>,
  <div css={[layout.flex, layout.row, layout.alignC]}>
    <span>For more contact Information, please see my resume</span>
    <span>
       <a css={[style.hoverA, layout.flex, layout.alignC, style.font1halfrem]}
        style={{ paddingLeft: '1rem' }}
        href="https://github.com/Quintin-Russell/Quintin-Russell/blob/main/Quintin%20Russell%20Resume.pdf"
        target="_blank"><HiOutlineDocumentText /></a>
    </span>
  </div>
]

export default new ViewSwapItem('Contact Information', 'list', 'contact', contactInfo)
