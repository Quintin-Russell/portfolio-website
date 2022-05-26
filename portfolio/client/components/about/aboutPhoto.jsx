/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import Typewriter from '../typewriter'

import style from '../../style/style'
import layout from '../../style/layout'

import QRfrance from '../../../server/public/images/qrPics/QRfrance.png'
import QRturkey from '../../../server/public/images/qrPics/QRturkey.jpeg'
import QRwedding from '../../../server/public/images/qrPics/QRwedding.jpeg'

const pCss = [layout.margin1rem, style.font2rem, style.incon, style.light]
const smallerImgCss = [layout.width50, layout.padding2rem]

export default function AboutPhoto() {
  return (
    <>
      <div css={[layout.flex, layout.row, layout.height100, layout.width100]}>
        <div css={[layout.flex, layout.col, layout.flex50]}>
          <div>
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
              <ul>
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
          </div>
          <div>
            <img src={QRwedding}
              alt="QR-wedding"
              css={[layout.width80, layout.padding2rem]} />
          </div>
        </div>
        <div css={[layout.flex, layout.col, layout.flex50]}>
          <div css={[layout.flex, layout.justEnd]}>
            <img src={QRfrance}
              alt="QR-france"
              css={smallerImgCss} />
          </div>
          <div css={[layout.flex, layout.justStart]}>
            <img src={QRturkey}
              alt="QR-turkey"
              css={smallerImgCss} />
          </div>
        </div>
      </div>
    </>
  )
}
