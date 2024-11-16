import { useState } from 'react'
import './App.css'
import Buttons from './Components/Buttons'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200 flex items-end' style={{backgroundColor : color}}>
     <div className='fixed flex justify-center w-full items-end bottom-12'>
      <div className='px-3 py-2 bg-white rounded-3xl flex gap-8'>
        <Buttons color="red" setBg = {setColor} />
        <Buttons color="green" setBg = {setColor} />
        <Buttons color="yellow" setBg = {setColor} />
        <Buttons color="black" setBg = {setColor} />
        <Buttons color="tan" setBg = {setColor} />
        <Buttons color="teal" setBg = {setColor} />
      </div>
     </div>
    </div>
  )
}

export default App
