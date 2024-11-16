import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
	const [numAllowed, setnumAllowed] = useState(false)
	const [symbolAllowed, setsymbolAllowed] = useState(false)
	const [Password, setPassword] = useState("")
	const [length, setlength] = useState(8)
	const [isClicked , setisClicked] = useState(false)

	// useRef Hook

	const passwordRef = useRef(null)

	const copyPassword = useCallback( () => {
		passwordRef.current?.select();
		window.navigator.clipboard.writeText(Password)
		setisClicked(true)
	}, [Password] )



	const passwordGenerator = useCallback( () => {

		let pass = ""
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

		if (numAllowed) str += "0123456789"

		if (symbolAllowed) str += "~`!@#$%^&*(){}[]<>?/|\\"

		for (let i = 0; i < length; i++) {
			let char = Math.floor(Math.random()*str.length)
			pass += str.charAt(char)
		}

		setPassword(pass)
		setisClicked(false)

	} , [symbolAllowed, numAllowed, length])

	useEffect( () => { passwordGenerator() } , [length, numAllowed,symbolAllowed, setPassword ] )

  return (
    <div className="bg-slate-700 text-white max-w-2xl w-full rounded-xl mx-auto mt-24">
			<div className="bg-slate-700 px-4 py-4 rounded-xl">
				<h1 className="text-white text-center mb-4">Password Generator</h1>
				<div className="relative mb-6">
					<input type="text" readonly placeholder='Password' spellCheck={false} ref={passwordRef} value={Password} className="text-black w-[93%] rounded-xl h-8 outline-none placeholder:pl-4 px-4"/>
					<button className= {` absolute right-0 rounded-e-lg  px-2 py-1 ${isClicked ? `bg-blue-600` : `bg-blue-400 hover:bg-blue-500`} `}  onClick={copyPassword} > {isClicked ? 'Copied' : 'Copy?'} </button>
				</div>
				<div className="flex gap-4">
					<input type="range" min={1} max={100} value={length} onChange={(e) => {setlength(e.target.value)}} />
					<label>length : {length}</label>
					<div >
						<label className="px-2 text-yellow-300">Numbers Allowed</label>
						<input type="checkbox" defaultChecked={numAllowed} onChange={ () => { setnumAllowed( pre => !pre ) } } />
					</div>
					<div >
						<label className="px-2 text-green-600">symbols Allowed</label>
						<input type="checkbox" defaultChecked = {symbolAllowed} onChange={ () => { setsymbolAllowed( pre => !pre ) } } />
					</div>
					
				</div>
			</div>
		</div>
  )
}

export default App
