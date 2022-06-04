/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { VscListSelection } from 'react-icons/vsc'

import style from '../style/style'
import layout from '../style/layout'

export default function Menu(props) {
  return (
    <>
      <div
        onClick={() => props.setMenuDisplay(!props.menuDisplay)}
        css={[layout.flex, layout.alignC, style.headerA]}>
        <VscListSelection css={[style.menuIcon]}
          style={(props.menuDisplay)
            ? { transform: 'rotate(90deg' }
            : null} />
      </div>
    </>)

}
