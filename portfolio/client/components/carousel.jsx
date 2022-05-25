/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/react'
import $ from 'jquery'

import {
  RiFocusFill,
  RiCheckboxBlankCircleLine,
  RiArrowRightCircleLine,
  RiArrowRightCircleFill,
  RiPauseCircleFill,
  RiPauseCircleLine,
  RiPlayCircleFill,
  RiPlayCircleLine
} from "react-icons/ri"

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md"

import style from '../style/style'
import layout from '../style/layout'

//props: hobbies (arr of objs)

export default function Carousel(props) {
  const [currentImg, setCurrentImg] = useState(0);
  const [screenSize, setScreenSize] = useState(screen.width);

  $(window).on('resize', () => setScreenSize(screen.width))


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
            <RiFocusFill css={[style.cursor, style.dots]} />
          </li>)
      };
      return (
        <li onClick={() => setCurrentImg(currentIndex)} key={index.toString()}>
          <RiCheckboxBlankCircleLine css={[style.cursor, style.dots]} />
        </li>
      )
    });
    return (
      <ul css={[layout.flex, layout.row, layout.alignC, layout.width100, layout.padding0, layout.justCent, style.noListStyle]}>
        {dotLiArr}
      </ul>
    );
  }

  const renderPhoto = () => {
    const hobby = props.obj.text[currentImg];
    return (
      <div css={[layout.flex, layout.justCent, layout.alignC]}>
        {hobby.img.src}
      </div>
    );
  }

  const renderCarousel = () => {
    if (screenSize > 768) {
      return (
      <>
        <div css={[layout.flex, layout.justCent, layout.width10]} onClick={() => prevImg()}>
          <MdOutlineKeyboardArrowLeft css={[style.arrow]} />
        </div>

        <div css={[layout.flex, layout.col, layout.justCent, layout.alignC]}>
          {renderPhoto()}
          {renderDots()}
        </div>

          <div css={[layout.flex, layout.justCent, layout.width10]} onClick={() => nextImg()}>
            <MdOutlineKeyboardArrowRight css={[style.arrow]} />
        </div>
      </>
      )
    } else {
      return (
        <>
          <div css={[layout.flex, layout.col, layout.justCent, layout.alignC]}>
            {renderPhoto()}
            {renderDots()}
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div css={[layout.flex, layout.width100, layout.row, layout.justSpbw, layout.alignC]}>
        {renderCarousel()}
      </div>
      <div>
        <p css={[style.monts, style.textCent]}>{props.obj.text[currentImg].text}</p>
      </div>
    </>
  );
}
