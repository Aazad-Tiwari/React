import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components'



function App() {
	const [from, setFrom] = useState('usd')
	const [to, setTo] = useState('inr')
	const [amount, setAmount] = useState(0)
	const [convertedAmount, setConvertedAmount] = useState(0)

	const currencyInfo = useCurrencyInfo(from)
	const options = Object.keys(currencyInfo)

	
	const convert = () => {
		setConvertedAmount( (amount * currencyInfo[to]).toFixed(2) )
	}
	
	const swap = () => {
			setFrom(to);
			setTo(from);
		  
			setAmount(convertedAmount);  
			// setConvertedAmount(amount);  
		
		  
	}


	const imgUrl = "https://shorturl.at/gYTCU"

return (
<div className='w-screen h-screen bg-center bg-cover relative flex items-center justify-center '
	style={{backgroundImage: `url(${imgUrl})`}}>
	<div className='max-w-xl w-full p-8 bg-white/30 text-white rounded-lg relative mx-auto border border-gray-60'>
			<form onSubmit={ (e) => {
				e.preventDefault()
				convert()
			} } >

				<InputBox label="from"
				 labell = 'from'
				 amount={amount} 
				 onAmountChange={ (amount) => (setAmount(amount)) }
				 currencyOptions={options}
				 onCurrencyChange={ setFrom }
				 selectCurrency={from}
				  />
				
				<button onClick={swap} className='absolute text-white text-xl z-10 left-64 top-[133px] bg-blue-600 px-3 py-1 rounded-md'>Swap</button>

				<InputBox label="from"
				 labell = 'to'
				 amount={convertedAmount} 
				//  onAmountChange={ (convertedAmount) => setConvertedAmount(convertedAmount) }
				 currencyOptions={options}
				 onCurrencyChange={ setTo }
				 selectCurrency={to}
				//  amountDisable
				  />
				
				<div className=' flex items-center justify-center'>
					<button type='submit' className=' bg-blue-700 px-8 py-2 text-2xl rounded mt-2 w-full capitalize'> {`convert from ${from.toUpperCase()}`} to { ` ${to.toUpperCase()} ` } </button>
				</div>

			</form>
	</div>
</div>
)
}

export default App