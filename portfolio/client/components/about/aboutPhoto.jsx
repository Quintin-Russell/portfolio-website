/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import Marquee from 'react-fast-marquee'

import Typewriter from '../typewriter'

import style from '../../style/style'
import layout from '../../style/layout'

import QRfrance from '../../../server/public/images/qrPics/QRfrance.png'
import QRturkey from '../../../server/public/images/qrPics/QRturkey.jpeg'
import QRwedding from '../../../server/public/images/qrPics/QRwedding.jpeg'
import QRcanyon from '../../../server/public/images/qrPics/QRcanyon.jpg'
import QRhuay from '../../../server/public/images/qrPics/QRhuay.jpg'
import QRlakes from '../../../server/public/images/qrPics/QRlakes.jpg'
import QRmountain from '../../../server/public/images/qrPics/QRmountain.jpg'

const imgArr = [QRfrance, QRhuay, QRwedding, QRcanyon, QRturkey, QRlakes, QRmountain]

const pCss = [layout.margin1rem, style.font2rem, style.incon, style.light]
const smallerImgCss = [layout.width20, layout.padding2rem]

export default function AboutPhoto(props) {
  return (
    <>
      {/* <div css={[layout.flex, layout.justCent, layout.height100, layout.width100]}> */}
      <div css={[layout.flex, layout.col]}>
        {/* <div> */}
        <section css={[layout.flex, layout.row, layout.margin1rem]}>
          <span>
            <p css={pCss}>From:</p>
          </span>
          <span>
            <Typewriter
              font='incon'
              fontSize='font2rem'
              tarString='Southern California'
              bold={[]}
              cursorDisappear={true}
              interval={400} />
          </span>
        </section>

        <section css={[layout.margin1rem, style.font2rem]}>
          <p css={pCss}>Education:</p>
          <ul
          // css={[style.textCent]}
          >
            <li>
              <Typewriter
                font='incon'
                fontSize='font2rem'
                tarString='Oregon State University, Bachelors of Science'
                bold={[]}
                cursorDisappear={true}
                interval={400} />
              <ul>
                <li>
                  <Typewriter
                    font='incon'
                    fontSize='font1rem'
                    tarString='Environmental Sciences: Water Resources'
                    bold={[]}
                    cursorDisappear={true}
                    interval={400} />
                </li>
              </ul>
            </li>
            <li>
              <Typewriter
                font='incon'
                fontSize='font2rem'
                tarString='LearningFuze, Accelerated Web Developent Program'
                bold={[]}
                cursorDisappear={true}
                interval={400} />
              <ul>
                <li>
                  <Typewriter
                    font='incon'
                    fontSize='font1rem'
                    tarString='Computer Science'
                    bold={[]}
                    interval={400} />
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <div css={style.fade}>
          <Marquee pauseOnHover={true} gradient={false}>
            {
              imgArr.map(x => {
                return (
                  <div
                    key={x}
                    css={[layout.margin1rem]}>
                    <img
                      style={{ width: `${props.screenSize / 5}px` }}
                      src={x} alt='QRphoto' />
                  </div>
                )
              })
            }
          </Marquee>
        </div>


      </div>
    </>
  )
}
