import React, {useState} from "react";

export const ConvertComponent = (props) => {
  const [inputConvertValue, setInputConvertValue] = useState(0);
  const [inputResultValue, setInputResultValue] = useState(0);
  const [checkedConvertingCurrency, setConvertingCurrency] = useState('usd');
  const [checkedResultCurrency, setResultCurrency] = useState('usd');


  const calcResultForOtherPairs = (value, currencyConvert, currencyResult) => {
    if (currencyResult === "uah") {
      setInputResultValue(value * props[currencyConvert])
    } else {
      setInputResultValue((value * props[currencyConvert]) / props[currencyResult]);
    }
  }

  const calcConvertResult = (value, currencyConvert, currencyResult) => {
    if (currencyConvert === currencyResult) {
      setInputResultValue(value)
    } else {
      switch (currencyConvert) {
        case "usd":
          calcResultForOtherPairs(value, currencyConvert, currencyResult)
          break;
        case "eur":
          calcResultForOtherPairs(value, currencyConvert, currencyResult)
          break;
        case "uah":
          setInputResultValue(value / props[currencyResult])
          break;
      }
    }
  }

  const getInputConvertingValue = (event) => {
    setInputConvertValue(event.target.value);
    calcConvertResult(event.target.value, checkedConvertingCurrency, checkedResultCurrency)
  }

  const calcBack = (value) => {
    if (checkedConvertingCurrency===checkedResultCurrency) {
      setInputConvertValue(value)
    } else {
      switch (checkedConvertingCurrency) {
        case "usd":
          if (checkedResultCurrency==="uah") {
            setInputConvertValue(value / props[checkedConvertingCurrency])
          } else {
            setInputConvertValue((value * props[checkedConvertingCurrency]) / props[checkedResultCurrency]);
          }
          break;
        case "eur":
          if (checkedResultCurrency==="uah") {
            setInputConvertValue(value / props[checkedConvertingCurrency])
          } else {
            setInputConvertValue((value * props[checkedResultCurrency]) / props[checkedConvertingCurrency]);
          }
          break;
        case "uah":
          setInputConvertValue(value * props[checkedResultCurrency])
          break;
      }
    }
  }

  const getInputResultValue = (event) => {
    setInputResultValue(event.target.value)
    calcBack(event.target.value)
  }

  const getSelectedConvertingCurrency = (event) => {
    setConvertingCurrency(event.target.value)
    calcConvertResult(inputConvertValue, event.target.value, checkedResultCurrency)
  }

  const getSelectedResultCurrency = (event) => {
    setResultCurrency(event.target.value)
    calcConvertResult(inputConvertValue, checkedConvertingCurrency, event.target.value)
  }


  return (
    <>
      <form className={"main__exchange-form"}>
        <div className="main__convert-block">
          <label htmlFor="converting-currency">
            У меня есть:
          </label>
          <input type="text" name="converting currency" onChange={(event) => getInputConvertingValue(event)} id="converting-currency" value={inputConvertValue}/>
          <select className="main__select" name="currency list" id="currency-for-convert" onChange={(event) => getSelectedConvertingCurrency(event)}>
            <option value="usd" selected>USD</option>
            <option value="eur">EUR</option>
            <option value="uah">UAH</option>
          </select>
        </div>

        <div className="main__convert-block">
          <label htmlFor="converting-result-currency">
            Я получу:
          </label>
          <input type="text" name="converting currency result" onChange={(event) => getInputResultValue(event)} value={inputResultValue} id="converting-result-currency"/>
          <select className="main__select" name="currency list" id="currency-convert-result" onChange={(event) => getSelectedResultCurrency(event)}>
            <option value="usd" selected>USD</option>
            <option value="eur" >EUR</option>
            <option value="uah">UAH</option>
          </select>
        </div>
      </form>
    </>
  )
}