import ViewSwapItem from "./viewSwapConstructor"
import BJJ from '../../../server/public/images/hobbies/BJJ.png'

const hobbiesArr = [
{
    name: 'Brazilian Jiu-Jitsu',
    text: `Brazilian Jiu-Jitsu is a grappling martial art that emphasizes using technique, timing and leverage to fight off much larger opponents. Some people call it 'human chess', as it is much more of a strategic 'game' than it is a fight. I started Brazilian Jiu-Jitsu in the summer of 2012. I remember recieving the first paycheck from my job and immediately going to the gym and signing up. Since then, I can't imagine doing a more fullfilling sport.`,
    img: {
      src: {BJJ},
      alt: 'QR-BJJ',
    }
  }
//   ,
//   {
//     name: 'Muay Thai Kickboxing',
//     text:,
//     img: {
//       src:,
//         alt:,
//     }
//   },
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
