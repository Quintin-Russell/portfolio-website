import React, {useState} from 'react';

import parseRoute from './parse-route';

import LandingPage from './pages/landingPage'

export default function App(props) {
  const [hash, setHash] = useState(parseRoute(window.location.hash))
  console.log('hash:', hash)

  const loadPage = (hash) => {
    if (hash.path === '') {
      return <LandingPage />
    }
  }

  return (
    <>
    <h1>What's up</h1>
    </>
  )
}
