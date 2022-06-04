/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import {
  RiFocusFill,
  RiCheckboxBlankCircleLine
} from "react-icons/ri"

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md"

import style from '../style/style'
import layout from '../style/layout'
import lessthan768 from './functions/lessthan768';

//props: hobbies (arr of objs)

const cont = [layout.flex, layout.justCent, layout.alignC]
const arrow = [layout.flex, layout.justCent, layout.width10]
const dots = [style.cursor, style.dots]

export default function Carousel(props) {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    if (currentImg === props.obj.text.length - 1) return setCurrentImg(0)
    const newState = currentImg + 1
    setCurrentImg(newState)
  }

  const prevImg = () => {
    if (currentImg === 0) return setCurrentImg(props.obj.text.length - 1)
    const newState = currentImg - 1
    setCurrentImg(newState)
  }

  const renderDots = () => {
    let index = 0;
    const dotLiArr = props.obj.text.map(x => {
      index++;
      const currentIndex = index - 1;
      if (currentImg === currentIndex) {
        return (
          <li key={index.toString()}>
            <RiFocusFill css={dots} />
          </li>)
      };
      return (
        <li onClick={() => setCurrentImg(currentIndex)} key={index.toString()}>
          <RiCheckboxBlankCircleLine css={dots} />
        </li>
      )
    });
    return (
      <ul css={[...cont, layout.row, layout.width100, layout.padding0, style.noListStyle]}>
        {dotLiArr}
      </ul>
    );
  }

  const renderPhoto = () => {
    const hobby = props.obj.text[currentImg];
    return (
      <div css={cont}>
        {hobby.img.src}
      </div>
    );
  }

  const renderCarousel = () => {
    if (!lessthan768(props.screenSize)) {
      return (
        <>
          <div css={arrow} onClick={() => prevImg()}>
            <MdOutlineKeyboardArrowLeft css={[style.arrow]} />
          </div>

          <div css={[...cont, layout.col]}>
            {renderPhoto()}
            {renderDots()}
          </div>

          <div css={arrow} onClick={() => nextImg()}>
            <MdOutlineKeyboardArrowRight css={[style.arrow]} />
          </div>
        </>
      )
    } else {
      return (
        <>
          <div css={[...cont, layout.col]}>
            {renderPhoto()}
            {renderDots()}
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div css={[layout.flex, layout.row, layout.alignC, layout.justSpbw, layout.width100]}>
        {renderCarousel()}
      </div>
      <div>
        <p css={[style.textCent, style.monts]}>{props.obj.text[currentImg].text}</p>
      </div>
    </>
  );
}
