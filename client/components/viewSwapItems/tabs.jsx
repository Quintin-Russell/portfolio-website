/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import style from '../../style/style'
import layout from '../../style/layout'

//props = objList, highlightedTab
const defaultCss = [layout.flex, layout.alignC, layout.justCent, style.textCent, style.incon, style.borderLight, style.cursor]

export default function Tabs(props) {
  const width = 100 / props.objList.length;
  return (
    <div css={[layout.flex, layout.row]}>
      {props.objList.map(obj => <Tab key={obj.name}
        obj={obj}
        highlighted={props.highlighted}
        width={width} />
      )}
    </div>
  )
}

// props = obj
function Tab(props) {
  const isHighlighted = () => (props.highlighted === props.obj.name)
    ? (
      <div data={props.obj.name}
        style={{ width: props.width + '%' }}
        css={[...defaultCss, style.highlightedTab]}>
        <p data={props.obj.name}>{props.obj.name}</p>
      </div>
    )
    : (
      <div data={props.obj.name}
        style={{ width: props.width + '%' }}
        css={defaultCss}>
        <p data={props.obj.name}>{props.obj.name}</p>
      </div>
    )
  return isHighlighted()
}
