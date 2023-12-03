import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardComponet from './componets/cardComponet'

function App() {


  return (
    <>
      <CardComponet message = "It is often the small steps, not the giant leaps, that bring about the most lasting change."  founder = "Das" />
      <br/>
      <CardComponet message = "The Magic you are looking for is in the work you are avoiding"  founder = "Mahesh Das" />
    </>
  )
}

export default App
