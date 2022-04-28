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
    toggleCursor(cursor => !cursor)
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

 return (
   <>
       <span></span>
       <p>
       {dispString.map((x) => <>
         <span key={x.word} css={(x.bold === 'bold') ? [style.monts, style.typewriterLandingPage, style.bold] : [style.monts, style.typewriterLandingPage]}>{x.word} </span>
       <span> </span>
       </>)}
         <span css={[style.monts, style.typewriterLandingPage]}>{(cursor) ?"|" :""}</span>
        </p>
     <span></span>
   </>
 )
}
