import React from "react";

function InputBox({
  lable,
  amount,
  onAmountChange,
  selectCurrency,
  onCurrencyChange,
  currencyOption = [],
}) {
  return (
    <div className="inline-flex">
      <div className="inline-flex flex-col">
        <label className=" mb-2 text-white">{lable}</label>
        <input
          type="number"
          className="text-white outline-none w-full bg-transparent"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        ></input>
      </div>
      <div className="inline-flex flex-col  bg-transparent cursor-pointer outline-none">
        <label className=" mb-2 text-white">Currency Type</label>
        <select
          className="rounded-2xl"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
