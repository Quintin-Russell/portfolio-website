/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import style from '../../style/style'
import layout from '../../style/layout'

//props = objList, highlightedTab

export default function Tabs(props) {
  const width = 100 / props.objList.length;
return (
  <div css={[layout.flex, layout.row]}>
    {props.objList.map(obj => <Tab key={obj.name}
                                    obj={obj}
                                    highlighted={props.highlighted}
                                    width={width}/>
    )}
  </div>
)
}

// props = obj
function Tab(props) {
  const defaultCss = [layout.flex, layout.justCent, layout.alignC, style.incon, style.borderLight]
  const isHighlighted = (props.highlighted === props.obj)
    ? [...defaultCss, style.highlightedTab]
    : defaultCss
  return (
    <div style={{width: props.width + '%'}}
          css={isHighlighted}>
      <p>{props.obj.name}</p>
    </div>
  )
}
