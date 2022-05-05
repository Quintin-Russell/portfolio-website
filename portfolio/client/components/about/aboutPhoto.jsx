/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'

import Typewriter from '../typewriter'

import style from '../../style/style'
import layout from '../../style/layout'

import QRfrance from '../../../server/public/images/qrPics/QRfrance.png'
import QRturkey from '../../../server/public/images/qrPics/QRturkey.jpeg'
import QRwedding from '../../../server/public/images/qrPics/QRwedding.jpeg'

export default function AboutPhoto() {
  return (
<>
    <div css={[layout.flex, layout.height100, layout.width100, layout.row]}>
      <div css={[layout.flex, layout.flex50, layout.col]}>
        <div>
            <section css={[style.incon, layout.flex, layout.row, layout.margin1rem]}>
            <span>
                <p css={[style.font2rem, style.light, layout.margin1rem]}>From:</p>
             </span>
           <span>
             <Typewriter
                  font='incon'
                  fontSize='font2rem'
                  tarString='Southern California'
                  bold={[]}
                  interval={400}/>
            </span>
            </section>

          <section css={[style.font2rem, layout.margin1rem]}>
              <p css={[style.incon, style.light, style.font2rem, layout.margin1rem]}>Education:</p>
            {/* <Typewriter
            font='incon'
            fontSize='font2rem'
            tarString='Education:'
            bold={[]}
            interval={400} /> */}
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
          <img src={QRwedding} alt="QR-wedding" />
        </div>
      </div>
      <div css={[layout.flex, layout.flex50, layout.col]}>

      </div>
    </div>
</>
  )
}
