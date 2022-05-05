/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react'

import layout from '../../style/layout'

import ViewSwapItem from "./viewSwapConstructor"
import BJJ from '../../../server/public/images/hobbies/BJJ.png'
import MuayThai from '../../../server/public/images/hobbies/MuayThai.png'

const hobbiesArr = [
{
    name: 'Brazilian Jiu-Jitsu',
    text: `Brazilian Jiu-Jitsu is a grappling martial art that emphasizes using technique,
    timing and leverage to fight off much larger opponents. Some people call it 'human chess',
    as it is much more of a strategic 'game' than it is a fight. I started Brazilian Jiu-Jitsu
    in the summer of 2012. I'll never forget recieving the first paycheck from my job and immediately
    going to the gym and signing up. Since then, I can't imagine doing a more fullfilling sport.`,
    img: {
      src: <img src={BJJ} alt='QR-BJJ' css={[layout.width80]}/>
    }
  },
  {
    name: 'Muay Thai Kickboxing',
    text: `In 2019, I moved to Chaing Mai, Thailand to start studying Muay Thai. Over the next 4 months,
    I would live at the gym and train 5-6 days per week. I still love training and plan to go back to Thailand
    to train and fight.`,
    img: {
      src: <img src={MuayThai} alt='QR-Muay-Thai' css={[layout.width80]}/>
    }
  },
{
  name: 'Traveling',
  text: `Since I was a kid, the highlight of my year would be the vacations that my dad would take us on. Evry year,
  we were lucky enough to explore exotic places and experience new cultures. Since then, I have always had the insatiable
  desire to explore the world around me and experience the different definitions of 'everyday life' that exist. Since 2018,
  I have had the luxury of working remotely and non-stop explore this planet that we call 'home'.`,
  img: {
    src: <img src={Travel} alt='QR-Travel' css={[layout.width80]} />
  }
}
// ,
// {
//   name: 'Surfing',
//   text:,
//   img: {
//     src:,
//       alt:,
//   }
// }
]

export default new ViewSwapItem('Hobbies', 'carousel', 'about', hobbiesArr)
