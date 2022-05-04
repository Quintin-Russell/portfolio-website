/** @jsx jsx */
import React, {useState} from 'react';
import { jsx, css } from '@emotion/react'

import { RiFocusFill,
        RiCheckboxBlankCircleLine,
        RiArrowRightCircleLine,
        RiArrowRightCircleFill,
        RiArrowLeftCircleLine,
        RiArrowLeftCircleFill} from "react-icons/ri"

import style from '../style/style'
import layout from '../style/layout'

//props: hobbies (arr of objs)

export default function Carousel(props) {
  const [currentImg, setCurrentImg] = useState(0);

    const int = setInterval(
      () => nextImg(),
      5000
    );

    const resetTimer = (int) => clearInterval(int)

  const nextImg= () => {
    clearInterval(int)
    if (currentImg === props.obj.text.length - 1) return setCurrentImg(0)
    const newState = currentImg + 1
    resetTimer(int)
    setCurrentImg(newState)
  }

  const prevImg = () => {
    clearInterval(int)
    if (currentImg === 0) return setCurrentImg(props.obj.text.length - 1)
    const newState = currentImg - 1
    resetTimer(int)
    setCurrentImg(newState)
  }

  const handleClickDot = (e) => {
    const tar = parseInt(e.target.id);
    resetTimer(int)
    setCurrentImg(tar);
  }

  const renderDots = () => {
    let index = 0;
    const dotLiArr = props.obj.text.map(x => {
      index++;
      if (currentImg === index - 1) {
      return(
      <li id={(index-1)} onClick={(e) => handleClickDot(e)} key={index.toString()}>
          <RiFocusFill />
      </li>)
      };
      return (
        <li id={(index - 1)} onClick={(e) => handleClickDot(e)} key={index.toString()}>
          <RiCheckboxBlankCircleLine />
        </li>
      )
    });
    return (
      <ul css={[layout.flex, layout.row, layout.alignC, layout.width100, layout.padding0, layout.justSpbw, style.noListStyle]}>
        {dotLiArr}
      </ul>
    );
  }

  const renderPhoto = () => {
    const hobby = props.obj.text[currentImg];
    console.log('currentImg in renderPhoto:', currentImg)
    console.log('hobby in renderPhoto:', hobby)
    return (
      <div css={[layout.flex, layout.justCent, layout.alignC]}>
        {hobby.img.src}
      </div>
    );
  }

    return (
      <div css={[layout.flex, layout.width100, layout.row, layout.justSpbw, layout.alignC]}>
        <div css={[style.cursor]}>
          <RiArrowLeftCircleLine onClick={() => prevImg()}
          css={[style.arrow,]}
          />
        </div>

        <div css={[layout.flex, layout.col, layout.justCent, layout.alignC]}>
          {renderPhoto()}
          {renderDots()}
        </div>

        <div>
          <RiArrowRightCircleLine onClick={() => nextImg()}
          css={[style.arrow]}/>
        </div>
      </div>
    );
}
