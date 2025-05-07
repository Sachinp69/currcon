import { useState } from 'react'
import './App.css'
import {InputBox} from './components'
import useCurrencyInfo from './useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo=useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
     setFrom(to)
     setTo(from)
     setConvertedAmount(amount)
     setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center 
        -center bg-cover bg-no-repeat"        
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}>
          <div className=" relative h-28 w-1/3 min-w-1/3 width p-2 
          rounded-lg bg-gray-800 bg-opacity-10">

            <div className="bg-white bg-opacity-20 backdrop-blur-lg 
            border border-white border-opacity-30 p-2 rounded-lg shadow-xl">

              <p className='text-slate-800 text-3xl'> Currency Converter</p>

            </div>
          </div>
          <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60
                  rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          convert(); 
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange = {(currency) => setFrom(currency)}
                              selectCurrency = {from}
                              onAmountChange={(amount) => {
                                setAmount(amount)
                              }}                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange = {(currency) => setTo(currency)}
                                selectCurrency = {to}
                                amountDisable={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
      </div>
    </>
  )
}

export default App
