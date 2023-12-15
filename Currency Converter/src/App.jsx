import { useState } from "react";
import LogoComponent from "./components/LogoComponent";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hook/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <div
        className="inline-flex w-full h-screen flex-wrap justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          backgroundSize: "cover",
        }}
      >
        <form
          className="mt-28"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div
            id="converterfield"
            className="inline-flex flex-wrap flex-col  rounded-3xl "
          >
            <h1 className="self-center mb-10 mt-3 text-3xl text-[#2C145B]">
              Currency converter
            </h1>

            <div
              id="FromField"
              className="inline-flex flex-wrap w-96 h-20  rounded-3xl bg-white justify-evenly"
            >
              <InputBox 
              lable="Form"
              amount={amount}
              onAmountChange = {(amount) => setAmount(amount)}
              selectCurrency = {from}
              onCurrencyChange = {(from) => setFrom(from)}
              currencyOption = {options}
              />
            </div>

            <button
              id="SWAP"
              className="inline-flex flex-wrap  justify-center self-center h-10 w-16 p-2 transform transition-transform hover:scale-105"
              onClick={swap}
            >
              <img src="\src\assets\Swap Logo-PhotoRoom.png-PhotoRoom.png"></img>
            </button>

            <div
              id="ToField"
              className="inline-flex flex-wrap w-96 h-20  rounded-3xl bg-white justify-evenly mt-7"
            >
              <InputBox 
                 lable="To"
                 amount={convertedAmount}
                 selectCurrency ={to}
                 onCurrencyChange = {(to) => setTo(to)}
                 currencyOption = {options} 
              />
            </div>
            <div className="inline-flex flex-wrap  justify-center self-center mt-8">
              <button
                type="submit"
                className="w-full bg-[#004AAD] text-white px-4 py-3 rounded-3xl transform transition-transform hover:scale-105"
              >
                Convert {from} to {to}
              </button>
            </div>
          </div>
        </form>

        <div className="inline-flex flex-wrap  justify-center self-end w-full h-1/5">
          <LogoComponent
            cn="mr-auto shrink"
            ima="Tea -PhotoRoom.png-PhotoRoom.png"
          />
          <LogoComponent
            cn="ml-auto shrink"
            ima="Sugar Logo-PhotoRoom.png-PhotoRoom.png"
          />
        </div>
      </div>
    </>
  );
}

export default App;
