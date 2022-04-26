/** @jsx jsx */
import React, { useState,
                useReducer,
                useEffect } from "react";
import { jsx, css } from '@emotion/react'

import style from '../style/style'

export default function Typewriter(props) {
 const [cursor, toggleCursor] = useState(true);
 let [dispString, pushDispString] = useState("")
  //  (dispString, tarString) => dispString += tarString[dispString.length],
  //  props.tarString[0]
 useEffect(()=> {
  const intCursor = setInterval(() => {
    console.log('props.tarString in typewriter:', props.tarString[dispString.length])
    console.log('dispString in typewriter:', dispString.length)
    toggleCursor(cursor => !cursor)
    if (cursor && (dispString.length !== props.tarString.length)) pushDispString(dispString += props.tarString[dispString.length])
  }, 75);

  return () => clearInterval(intCursor)
 }, [])

 return (
   <>
       <span></span>
       <p css={[style.monts, style.typewriterLandingPage]}>
         {dispString}
         <span css={[style.monts, style.typewriterLandingPage]}>{(cursor) ?"|" :""}</span>
        </p>


     <span></span>
   </>
 )
}
