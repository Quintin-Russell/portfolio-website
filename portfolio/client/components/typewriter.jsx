/** @jsx jsx */
import React, {
  useState,
  useReducer,
  useRef,
  useEffect
} from "react";
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


  useEffect(() => {
    const intCursor = setInterval(() => {
      if (props.cursorDisappear && counter === tarStringSplit.length) {
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

    }, props.interval);

    return () => clearInterval(intCursor)
  }, [])

  const font = (props.font) ? style[props.font] : null
  const fontSize = (props.fontSize) ? style[props.fontSize] : null

  return (
    <>
      <p css={[style.textCent]}>
        {dispString.map((x) => <>
          <span key={x.word}
            css={(x.bold === 'bold')
              ? [font, fontSize, style.bold]
              : [font, fontSize]}>{x.word} </span>
          <span key={`${x.word}1`}> </span>
        </>)}
        <span css={[font, fontSize]}>{(cursor)
          ? "|"
          : ""}</span>
      </p>
    </>
  )
}
