import React, {useState} from 'react';

import parseRoute from './parse-route'

export default function App(props) {
  const [hash, setHash] = useState(parseRoute(window.location.hash))
  console.log('hash:', hash)
  console.log('$(window):', $(window))



  return (
    <>
    <h1>What's up</h1>
    </>
  )
}
