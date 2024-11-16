import React, { useId } from "react";

function InputBox( {

    labell,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency = "usd",
    currencyDisable = false,
    amountDisable,
    currencyOptions = []    

} ) {

    const amountId = useId()
    // console.table(labell, amount, onAmountChange , onCurrencyChange , currencyOptions)
    

    return (
        <div className="w-full mb-4 text-black/60 flex justify-between bg-white p-5 rounded-lg backdrop-blur-xl">
            <div className="flex flex-col w-1/2">
                <label className="text-black/60 mb-2" htmlFor={amountId}>
                    {labell}
                </label>
                <input
                    className="py-1.5 outline-none bg-transparent w-full text-black"
                    min ={0}
                    step={"any"}
                    id={amountId}
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled = {amountDisable}
                    onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value)) }
                />
            </div>
            <div className="flex flex-col">
                <p className="ml-36 text-black/60 mb-4">Currency Type</p>

                <select value={selectCurrency} onChange={ (e) => { onCurrencyChange && onCurrencyChange( e.target.value ) } } className="w-24 ml-[150px] bg-gray-100 text-black outline-none rounded-lg px-2 py-1" >

                {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
