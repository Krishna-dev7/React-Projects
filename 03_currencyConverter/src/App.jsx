import { useState } from 'react'
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from './components/InputBox';
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  console.log("currency info ; ", currencyInfo);
  const options = Object.keys(currencyInfo);
  console.log(options);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div className="currencyConverter gap-10 flex flex-col justify-center items-center w-5/12 h-fit p-10 px-6 bg-slate-500/30 backdrop-blur-xl rounded-lg shadow-3xl text-black">
      <InputBox
        label={"From"}
        amount={amount}
        currency={from}
        onCurrencyChange={(currency) => { setFrom(currency) }}
        onAmountChange={(val) => { setAmount(Number(val)) }}
        currencyOptions={options}
      />
      <InputBox
        label={"To"}
        amount={convertedAmount}
        currency={to}
        onCurrencyChange={(currency) => setTo(currency)}
        onAmountChange={(val) => setConvertedAmount(Number(val))}
        currencyOptions={options}
      />

      <div className="button-group w-full p-3 flex justify-evenly gap-5">
        <button
          className='button'
          onClick={convert} >
          convert  {from.toUpperCase()} to {to.toUpperCase()}
        </button>

        <button
          className="button"
          onClick={swap}>
          swap
        </button>
      </div>
    </div>
  )
}

export default App
