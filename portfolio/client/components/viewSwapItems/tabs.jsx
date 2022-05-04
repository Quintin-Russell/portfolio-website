/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import style from '../../style/style'
import layout from '../../style/layout'

//props = objList, highlightedTab

export default function Tabs(props) {
return (
  <div css={[layout.flex, layout.row]}>
    {props.objList.map(obj => <Tab key={obj.name}
                                    obj={obj}
                                    len={props.objList.length}/>
    )}
  </div>
)
}

// props = obj
function Tab(props) {
  const determineWidth = (len) => `${100 / len}`;

  return (
    <div style={{width: determineWidth(props.len) + '%'}}
    css={[layout.flex, layout.justCent, layout.alignC, style.incon, style.borderLight]}>
      <p>{props.obj.name}</p>
    </div>
  )
}
