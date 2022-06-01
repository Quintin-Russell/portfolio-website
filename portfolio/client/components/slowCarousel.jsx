/** @jsx jsx */
import React, {
  useState,
  useReducer,
  useEffect
} from 'react';
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import style from '../style/style'
import layout from '../style/layout'

//props: hobbies (arr of objs)
const cont = [layout.flex, layout.justCent, layout.alignC]
const arrow = [layout.flex, layout.justCent, layout.width10]
const dots = [style.cursor, style.dots]

export default function SlowCarousel(props) {
  const [arr, setArr] = useState(props.baseArray)
  const [deltaX, setDeltaX] = useState(0);

  const recycleItem = () => {
    const newArr = [...arr]
    console.log('recycle fired(arr before:', newArr)
    const firstItem = newArr.shift();
    newArr.push(firstItem)
    console.log('state updated in main comp:', newArr)
    setArr(newArr)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (deltaX === props.screenSize) {
        recycleItem()
      } else {
        const newDeltaX = deltaX + 2
        setDeltaX(newDeltaX)
      }
    }, 30);
    return () => clearInterval(interval)
  }, [deltaX])



  const determineItem = (x) => {
    return (<Photo
      key={x}
      photo={x}
      screenSize={props.screenSize} />)
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (idx < imgArr.length - 1) {
  //       const newIdx = idx + 1
  //       setIdx(newIdx)
  //     }
  //   }, 1000)
  // }, [idx])



  return (
    <>
      <div css={[layout.flex, layout.alignC, style.fade, style.borderLight]}>
        <div css={[layout.flex, layout.row]}
        style={{ position: 'relative', left: `${deltaX}px` }}
          >
            {
              props.baseArray.map(x => determineItem(x))
          }
        </div>
      </div>

    </>
  );
}

const Photo = (props) => {

  return (
    <>
      <div
        css={[style.borderLight, layout.margin1rem]}>
        <img
          style={{ minHeight: '75px', width: '150px' }}
          // css={[layout.width10]}
          src={props.photo} alt='QRphoto' />
      </div>
    </>
  )
}
