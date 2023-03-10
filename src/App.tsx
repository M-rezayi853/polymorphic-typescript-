import React, { useRef } from 'react'

import { Text } from './components'
import './App.css'

const Emphasis = ({ children }: { children: React.ReactText }) => {
  return (
    <em style={{ background: 'yellow', color: 'black', fontSize: '40px' }}>
      {children}
    </em>
  )
}

function App() {
  const ref = useRef<HTMLHeadingElement | null>(null)

  return (
    <div className='App'>
      <Text as={'h1'} ref={ref}>
        Hello World!
      </Text>
      <Text as={'h2'} color='blue' style={{ backgroundColor: 'red' }}>
        Start editing to see some magic happen!
      </Text>
      <Text as={'a'} href='https://www.google.com'>
        Today is a beautiful day for me.
      </Text>

      <Text>Hi From Me.</Text>

      <br />

      <Text as={Emphasis}>This is important. You are awesome!!!</Text>
    </div>
  )
}

export default App
