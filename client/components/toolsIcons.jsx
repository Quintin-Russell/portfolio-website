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

const rowCont = [layout.flex, layout.row, layout.justCent]

export default function ToolsIcons() {
  return (
    <>
      <div css={[layout.flex, layout.col]}>
        <div css={[layout.flex, layout.alignC, layout.justCent]}>
          <img
            css={style.techIconBasics}
            src={basics}
            alt='basic-web-dev-techs' />
        </div>
        <div css={[layout.flex, layout.justCent, layout.col]}>
          <div css={rowCont}>
            <img css={style.img}
              src={react}
              alt="react.js" />
            <img css={style.img}
              src={node}
              alt="nodeJS" />
          </div>
          <div css={rowCont}>
            <img css={style.img}
              src={jquery}
              alt="jquery" />
            <img css={style.img}
              src={postgresql}
              alt="postgreSQL" />
          </div>
        </div>
        <div css={[layout.flex, layout.row, layout.alignC, layout.justSpbw]}>
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
