/** @jsx jsx */
import React, {useState} from 'react'
import { jsx, css } from '@emotion/react'

import ViewSwapText from './viewSwapItems/viewSwapText'
import Tabs from './viewSwapItems/tabs'

import style from '../style/style'
import layout from '../style/layout'

// props= objList (arr of objects)

export default function ViewSwap(props) {
  const [highlightedTab, setHighlightedTab] = useState(props.objList[0])

  const determineItem = (obj) => {
    if (obj.type === 'text' && highlightedTab === obj) return <ViewSwapText key={obj.name} obj={obj} />
    return <div css={style.hidden}></div>
  }
  return (
    <>
    <div css={[layout.flex, layout.col, layout.width80, layout.height80]}>
      <Tabs onClick={(e) => {
            console.log('e.target in onCLick in Tabs in about.jsx:', e.target)
            setHighlightedTab(e.target)}}
            objList={props.objList}
            highlighted={highlightedTab}/>
        <div css={[layout.flex, layout.col, layout.justCent, layout.alignC, style.fade, style.borderLight]}>
          {props.objList.map(obj => determineItem(obj))}
        </div>
    </div>

    </>
  )
}
