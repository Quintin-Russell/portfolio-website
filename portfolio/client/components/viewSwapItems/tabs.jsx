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
  // const defaultCss = [layout.flex, layout.justCent, layout.alignC, style.incon, style.borderLight, style.cursor]
  // const isHighlighted = (props.highlighted === props.obj.name)
  //   ? [...defaultCss, style.highlightedTab]
  //   : defaultCss
  const defaultCss = [layout.flex, layout.justCent, layout.alignC, style.incon, style.borderLight, style.cursor]
  const isHighlighted = () => (props.highlighted === props.obj.name)
    ? (
    <div data={props.obj.name}
      style={{ width: props.width + '%' }}
        css={[style.highlightedTab, style.noBorderBottom]}>
    </div>
  )
    :(
    <div data={props.obj.name}
          style={{width: props.width + '%'}}
          css={defaultCss}>
      <p data={props.obj.name}>{props.obj.name}</p>
    </div>)
  return isHighlighted()
}
