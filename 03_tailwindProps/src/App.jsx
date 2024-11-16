import './App.css'
import Cards from './components/cards'

function App() {

  const myObj = {username:'aazad', age : 22}
  const Arr = [1,2,3]

  return (
    <>
     {/* <h1 className="bg-green-500 p-5 rounded-3xl"> hello </h1> */}
    {/* <Cards username1="raman" newObj= {myObj} myArr = {Arr} /> */}

    <Cards username1="raman" btnText='please click' />
    <Cards username1="rajat" />
    </>
  )
}

export default App
