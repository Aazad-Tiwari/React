import React from 'react'

function Buttons({color, setBg}) {
  return (
    <>
        <button style={{backgroundColor: color}} className='px-4 shadow-xl py-1 text-white 
        rounded-xl outline-none text-xl' onClick={ () => setBg(color) } >{color}</button>
    </>
  )
}

export default Buttons