/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import style from '../../style/style'
import layout from '../../style/layout'

import basics from '../../../server/public/images/techIcons/basics.png'
import node from '../../../server/public/images/techIcons/node.png'
import jquery from '../../../server/public/images/techIcons/jquery.png'
import react from '../../../server/public/images/techIcons/react.png'
import postgresql from '../../../server/public/images/techIcons/postgresql.png'
import python from '../../../server/public/images/techIcons/python.png'
import sql from '../../../server/public/images/techIcons/sql.png'

const imgCont = [layout.flex, layout.row, layout.justCent]
const smallIcon = [layout.width25, style.img]

export default function ToolsIcons() {
  return (
    <>
      <div css={[layout.flex, layout.col, layout.width80, layout.alignC]}>
        <div css={[layout.flex, layout.alignC, layout.justCent, layout.toolsMargin]}>
          <img css={layout.width80, style.techIconBasics}
            src={basics}
            alt='basic-web-dev-techs' />
        </div>
        <div css={[layout.flex, layout.col, layout.justCent, layout.toolsMargin]}>
          <div css={imgCont}>
            <img css={smallIcon}
              src={react}
              alt="react.js" />
            <img css={smallIcon}
              src={node}
              alt="nodeJS" />
          </div>
          <div css={imgCont}>
            <img css={smallIcon}
              src={jquery}
              alt="jquery" />
            <img css={smallIcon}
              src={postgresql}
              alt="postgreSQL" />
          </div>
        </div>
        <div css={[layout.flex, layout.row, layout.width80, layout.alignC, layout.justSpbw, layout.toolsMargin]}>
          <img css={style.img}
            src={python}
            alt="python" />
          <img css={style.img}
            src={sql}
            alt="SQL" />
        </div>
      </div>

    </>

  )
}
