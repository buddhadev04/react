import React from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className='bg-white p-3 rounded-lg text-sm d-flex'>
      <div className="w-50 pe-2">
        <label className="form-label text-muted">
          {label}
        </label>
        <input
          className="form-control bg-transparent border-0 p-1"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-50 d-flex flex-column align-items-end">
        <p className="text-muted mb-2">Currency Type</p>
        <select
          className="form-select rounded-3 px-2 py-1 bg-light"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
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
