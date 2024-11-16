import './App.css'
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(0)

  const addVal = () => {
    if (counter >= 20) return;
    
    
    // setCounter(counter + 1)   // won't increment four times but one time coz bunch me task send kiye jaate hai to 1 hi consider ho jaata hai
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // this is the solution for above problem kyuki call back execute hone k baad hi next call back pe jaati hai

    // setCounter( prevCounter => prevCounter + 1  )
    // setCounter( prevCounter => prevCounter + 1  )
    // setCounter( prevCounter => prevCounter + 1  )
    // setCounter( prevCounter => prevCounter + 1  )

    // mera approach
    counter++ ; counter++ ; counter++ ; counter++ ; 
    setCounter(counter)
  }
  const remVal = () => {
    if (counter === 0) return;
    setCounter(counter - 1)
  }
  

  return (
  <>
   <h1>Counter App</h1>
   <h2>Counter Value : {counter} </h2>
   <button onClick={addVal} >Add Value {counter} </button>
   <button onClick={remVal} >Remove Value {counter} </button>
   <p>Footer : {counter} </p>
  </>
  )
}

export default App
