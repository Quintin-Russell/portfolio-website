/** @jsx jsx */
import React, {useReducer} from 'react'
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import ViewSwapText from './viewSwapItems/viewSwapText'
import ViewSwapList from './viewSwapItems/viewSwapList'
import Tabs from './viewSwapItems/tabs'

import style from '../style/style'
import layout from '../style/layout'

// props= objList (arr of objects)

export default function ViewSwap(props) {
  const [highlightedTab, setHighlightedTab] = useReducer(
  (highlightedTab, e) => {
      if ($(e.target).attr('data')) return $(e.target).attr('data')
  },
props.objList[0].name
  )

  const determineItem = (obj) => {
    if (obj.type === 'text' && highlightedTab === obj.name) return <ViewSwapText key={obj.name} obj={obj} />
    if (obj.type === 'list' && highlightedTab === obj.name) return <ViewSwapList key={obj.name} obj={obj} />
    return <div key={Math.random() * 9999999} css={style.hidden}></div>
  }
  return (
    <>
      <div onClick={(e) => setHighlightedTab(e)} css={[layout.flex, layout.col, layout.width80, layout.height80]}>
      <Tabs objList={props.objList}
            highlighted={highlightedTab}/>
        <div css={[layout.flex, layout.col, layout.justCent, layout.alignC, style.fade, style.borderLight]}>
          {props.objList.map(obj => determineItem(obj))}
        </div>
    </div>

    </>
  )
}
