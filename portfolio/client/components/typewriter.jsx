/** @jsx jsx */
import React, { useState,
                useReducer,
                useEffect } from "react";
import { jsx, css } from '@emotion/react'

import style from '../style/style'

export default function Typewriter(props) {
 const [cursor, toggleCursor] = useState(true);
 let [counter, setCounter] = useState(0);
 const [dispString, pushDispString] = useReducer(
  (dispString, newVal) => [...dispString, newVal],
  [])

 const tarStringSplit = (props.tarString)
    ? props.tarString.split(" ")
    : null


 useEffect(()=> {
  const intCursor = setInterval(() => {
    if (props.cursorDisappear && counter === tarStringSplit.length){
        toggleCursor(cursor => false)
    } else {
      toggleCursor(cursor => !cursor)
    }
    if (cursor && (counter !== tarStringSplit.length)) {
      const nextWord = (props.bold.includes(tarStringSplit[counter]))
        ? (
          {
            word: tarStringSplit[counter],
            bold: 'bold'
          }
        )
        : (
          {
            word: tarStringSplit[counter],
            bold: 'normal'
          }
        )
      pushDispString(nextWord)
      setCounter(counter++)
    }

  }, 200);

  return () => clearInterval(intCursor)
 }, [])

 const font = (props.font) ? style[props.font] : null

 return (
   <>
       <p>
       {dispString.map((x) => <>
         <span css={(x.bold === 'bold') ? [font, style.typewriterLandingPage, style.bold] : [font, style.typewriterLandingPage]}>{x.word} </span>
         <span> </span>
       </>)}
       <span css={[font, style.typewriterLandingPage]}>{(cursor) ?"|" :""}</span>
        </p>
   </>
 )
}
