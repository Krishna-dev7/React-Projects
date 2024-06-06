import { useId } from "react"

function InputBox({
  label,
  className = "",
  amount,
  currency,
  onCurrencyChange,
  onAmountChange,
  currencyOptions = [],
}) {

  // using useid hook to bind label with input
  // don't use this hook with key attribute to generate unique
  const id = useId();

  return (
    <div className={`inputBox bg-white rounded-md px-3 w-full py-2 flex justify-between items-center ${className} `}>
      <div className="amount flex flex-col justify-evenly gap-2">
        <label className="text-dark text-left" htmlFor={id} >
          {label}
        </label>

        <input
          className="indent-1  rounded-md py-1 px-2 "
          value={amount ?? 0}
          onChange={(e) => {
            onAmountChange && onAmountChange(e.target.value);
          }}
          type="number" name="amount" id={id}
        />
      </div>

      <div className="currency w-1/2 h-full flex flex-col justify-evenly gap-2  ">
        <label className="text-left" htmlFor={id}>
          currency type
        </label>

        <select
          className="rounded-md py-1 px-2"
          value={currency ?? "usd"}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value)
          }}
          name="currency-options">
          {/* all options */}
          {currencyOptions.map((currency) => {
            return <option key={currency} value={currency}> {currency} </option>
          })}
        </select>
      </div>
    </div>
  )
}

export default InputBox;