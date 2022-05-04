/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react'

import layout from '../../style/layout'

import ViewSwapItem from "./viewSwapConstructor"
import BJJ from '../../../server/public/images/hobbies/BJJ.png'
import MuayThai from '../../../server/public/images/hobbies/MuayThai.png'

const hobbiesArr = [
// {
//     name: 'Brazilian Jiu-Jitsu',
//     text: `Brazilian Jiu-Jitsu is a grappling martial art that emphasizes using technique, timing and leverage to fight off much larger opponents. Some people call it 'human chess', as it is much more of a strategic 'game' than it is a fight. I started Brazilian Jiu-Jitsu in the summer of 2012. I remember recieving the first paycheck from my job and immediately going to the gym and signing up. Since then, I can't imagine doing a more fullfilling sport.`,
//     img: {
//       src: {BJJ},
//       alt: 'QR-BJJ',
//     }
//   },
//   {
//     name: 'Muay Thai Kickboxing',
//     text: `In 2019, I moved to Chaing Mai, Thailand to start studying Muay Thai. Over the next 4 months, I would live at the gym and train 5-6 days per week. I still love training and plan to go back to Thailand to train and fight.`,
//     img: {
//       src: {MuayThai},
//       alt:'QR-Muay-Thai',
//     }
//   }
{
    name: 'Brazilian Jiu-Jitsu',
    text: `Brazilian Jiu-Jitsu is a grappling martial art that emphasizes using technique, timing and leverage to fight off much larger opponents. Some people call it 'human chess', as it is much more of a strategic 'game' than it is a fight. I started Brazilian Jiu-Jitsu in the summer of 2012. I remember recieving the first paycheck from my job and immediately going to the gym and signing up. Since then, I can't imagine doing a more fullfilling sport.`,
    img: {
      src: <img src={BJJ} alt='QR-BJJ' css={[layout.width50]}/>
    }
  },
  {
    name: 'Muay Thai Kickboxing',
    text: `In 2019, I moved to Chaing Mai, Thailand to start studying Muay Thai. Over the next 4 months, I would live at the gym and train 5-6 days per week. I still love training and plan to go back to Thailand to train and fight.`,
    img: {
      src: <img src={MuayThai} alt='QR-Muay-Thai' css={[layout.width50]}/>,
    }
  }
  // ,
// {
//   name: 'Traveling',
//   text:,
//   img: {
//     src:,
//       alt:,
//   }
// },
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
