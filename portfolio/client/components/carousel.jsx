import React, {useState,
              useEffect} from 'react';
// import { BiRadioCircle,
//         FaDotCircle,
//         ImCircleLeft,
//         ImCircleRight } from 'react-icons/all'

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


  const nextImg= () => {
    if (currentImg === props.hobbies.length - 1) return setCurrentImg(0)
    const newState = currentImg + 1
    setCurrentImg(newState)
  }

  const prevImg = () => {
    if (currentImg === 0) return setCurrentImg(props.hobbies.length - 1)
    const newState = currentImg - 1
    setCurrentImg(newState)
  }

  const handleClickDot = (e) => {
    const tar = parseInt(e.target.id);
    setCurrentImg(tar);
  }

  const renderDots = () => {
    let index = 0;
    const dotLiArr = props.hobbies.map(x => {
      index++;
      if (currentImg === index - 1) {
      return(
      <li onClick={() => handleClickDot()} key={index.toString()}>
          <RiFocusFill />
      </li>)
      };
      return (
        <li onClick={() => handleClickDot()} key={index.toString()}>
          <RiCheckboxBlankCircleLine />
        </li>
      )
    });
    return (
      <ul css={[style.noListStyle, layout.row]}>
        {dotLiArr}
      </ul>
    );
  }

  const renderPhoto = () => {
    // const photoIndex = this.state.currentImg;
    const hobby = props.hobbies[currentImg];
    console.log('hobby in renderPhoto:', hobby)
    return (
      <div css={[layout.flex, layout.justCent, layout.alignC]}>
        <img src={hobby.img.src} alt={hobby.img.alt} css={[layout.width50]} />
      </div>
    );
  }

  useEffect(() => {
    const int = setInterval(
      () => nextImg(),
      5000
    );

    return () => clearInterval(int)
  }, [])

    return (
      <div css={[layout.flex, layout.row, layout.justCent, layout.alignC]}>
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
