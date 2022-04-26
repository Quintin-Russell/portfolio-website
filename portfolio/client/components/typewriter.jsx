/** @jsx jsx */
import React, { useState, useReducer } from "react";
import { jsx, css } from '@emotion/react'

export default function Typewriter(props) {
 const [cursor, toggleCursor] = useState(true);
 const [dispString, pushDispString] = useReducer(
   (dispString, targetString) => dispString.push(targetString[dispString.length]),
   ""
 )

 return (
   <>
       <span></span>

     <span>
       <p>{dispString}</p>
       <p>{(cursor) ?"|" :""}</p>
       </span>

     <span></span>
   </>
 )
}
