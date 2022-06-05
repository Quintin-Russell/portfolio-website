/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react'

import layout from '../../style/layout'

import ViewSwapItem from "./viewSwapConstructor"
import BJJ from '../../../server/public/images/hobbies/BJJ.png'
import MuayThai from '../../../server/public/images/hobbies/MuayThai.png'
import Travel from '../../../server/public/images/hobbies/Travel.png'
import Surf from '../../../server/public/images/hobbies/Surf.png'

const hobbiesArr = [
  {
    name: 'Brazilian Jiu-Jitsu',
    text: `Brazilian Jiu-Jitsu is a grappling martial art that emphasizes using technique,
    timing and leverage to fight off much larger opponents. Some people call it 'human chess',
    as it is much more of a strategic 'game' than it is a fight. I started Brazilian Jiu-Jitsu
    in the summer of 2012. I'll never forget recieving the first paycheck from my job and immediately
    going to the gym and signing up. Since then, I can't imagine doing a more fullfilling sport.`,
    img: {
      src: <img src={BJJ} alt='QR-BJJ' css={[layout.width100]} />
    }
  },
  {
    name: 'Muay Thai Kickboxing',
    text: `In 2019, I moved to Chaing Mai, Thailand to start studying Muay Thai. Over the next 4 months,
    I would live at the gym and train 5-6 days per week. I still love training and plan to go back to Thailand
    to train and fight.`,
    img: {
      src: <img src={MuayThai} alt='QR-Muay-Thai' css={[layout.width100]} />
    }
  },
  {
    name: 'Surfing',
    text: `As a kid, my dad used to take my brother and I surfing every chance he got. When he was too busy, we
    would pester my mom to drive us to the beach before and after school. Since my grom days, I have kept up with
    surfing and don't plan on stopping.`,
    img: {
      src: <img src={Surf} alt='QR-Surf' css={[layout.width100]} />
    }
  },
  {
    name: 'Traveling',
    text: `When I was a kid, the highlight of my year would be the vacations that my dad would take us on. Every year,
  we were lucky enough to explore exotic places and experience new cultures. Since then, I have always had the insatiable
  desire to explore the world around me and experience the different definitions of 'everyday life' that exist. Since 2018,
  I have had the luxury of working remotely and non-stop exploring this planet that we call 'home'. Also, in case you are
  wondering: yes! That is a monkey in the center photo. Her name is Maya and she lives with the Sacha Wasi tribe in the remote
  Amazon.`,
    img: {
      src: <img src={Travel} alt='QR-Travel' css={[layout.width100]} />
    }
  }
]

export default new ViewSwapItem('Hobbies', 'carousel', 'about', hobbiesArr)
