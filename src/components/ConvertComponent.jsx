import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {CONSTANTS} from "../js/CONSTANTS.js";
import {getCurrencyForConvertAction, getCurrencyResultAction, getValueForChangeAction, getResultAction} from "../actions";

export const ConvertComponent = () => {
  const dispatch = useDispatch();

  const inputConvertValue = useSelector(store => store.valueForChangeReducer.value);
  const inputResultValue = useSelector(store => store.valueResultReducer.value);
  const checkedCurrencyForConvert = useSelector(store => store.currencyForConvertReducer.checked);
  const checkedCurrencyResult = useSelector(store => store.currencyResultReducer.checked);
  const currencyReducerArray = (useSelector(store => store.getCurrencyReducer));
  let checkedEvent;


  const getInputConvertingValue = (event) => {
    checkIncorrectValue(event);

    dispatch(getValueForChangeAction(checkedEvent));

    checkSimilarCurrency(getResultAction, checkedEvent);
    exchangeData(getResultAction, checkedCurrencyResult, checkedEvent);
  }

  const getInputResultValue = (event) => {
    checkIncorrectValue(event);

    dispatch(getResultAction(checkedEvent));

    checkSimilarCurrency(getValueForChangeAction, checkedEvent);
    convertExchangeData(checkedEvent);
  }

  const getSelectedConvertingCurrency = (event) => {
    dispatch(getCurrencyForConvertAction(event.target.value));

    exchangeCheckedCurrency(event.target.value);
  }

  const getSelectedResultCurrency = (event) => {
    dispatch(getCurrencyResultAction(event.target.value));

    exchangeData(getResultAction, event.target.value, inputConvertValue);
  }

  const checkIncorrectValue = (event) => {
    checkedEvent = event.target.value.replace(CONSTANTS.REGEXP, '');
    checkedEvent === '.' ? checkedEvent = '' : checkedEvent;
  }

  const checkSimilarCurrency = (action, value) => {
    if (checkedCurrencyForConvert === checkedCurrencyResult) {
      dispatch(action(value));
    }
  }

  const exchangeData = (action, value, inputValue) => {
    value === 'UAH'
      ? dispatch(getResultAction(currencyReducerArray[checkedCurrencyForConvert] * inputValue))
      : dispatch(getResultAction((currencyReducerArray[checkedCurrencyForConvert] * inputValue) / currencyReducerArray[value]));
  }

  const exchangeCheckedCurrency = (value) => {
    checkedCurrencyResult === 'UAH'
      ? dispatch(getResultAction(currencyReducerArray[value] * inputConvertValue))
      : dispatch(getResultAction((currencyReducerArray[value] * inputConvertValue) / currencyReducerArray[checkedCurrencyResult]));
  }

  const convertExchangeData = (value) => {
    checkedCurrencyResult === 'UAH'
      ? dispatch(getValueForChangeAction(value / currencyReducerArray[checkedCurrencyForConvert]))
      : dispatch(getValueForChangeAction((value * currencyReducerArray[checkedCurrencyResult]) / currencyReducerArray[checkedCurrencyForConvert]));
  }

  return (
    <>
      <form className={"main__exchange-form"}>
        <div className="main__convert-block">
          <label htmlFor="converting-currency">
            Я маю:
          </label>
          <input type="text" name="converting currency"
                 value={inputConvertValue} id="converting-currency"
                 onChange={(event) => getInputConvertingValue(event)}
                 onFocus={(event) => event.target.value === '0' ? event.target.value = '' : event.target.value }
          />
          <select className="main__select" name="currency list" id="currency-for-convert"
                  onChange={(event) => getSelectedConvertingCurrency(event)}>
            {Object.keys(useSelector(store => store.getCurrencyReducer)).map((currency) => <option value={currency} >{currency}</option>)}
          </select>
          {
            checkedCurrencyForConvert
            ? <p className="main__message-block">1 {checkedCurrencyForConvert} = {currencyReducerArray[checkedCurrencyForConvert]} UAH</p>
            : false
          }
        </div>

        <div className="main__convert-block">
          <label htmlFor="converting-result-currency">
            Я отримаю:
          </label>
          <input type="text" name="converting currency result"
                 value={inputResultValue} id="converting-result-currency"
                 onChange={(event) => getInputResultValue(event)}
                 onFocus={(event) => event.target.value === '0' ? event.target.value = '' : event.target.value }
          />
          <select className="main__select" name="currency list" id="currency-convert-result" onChange={(event) => getSelectedResultCurrency(event)}>
            {Object.keys(useSelector(store => store.getCurrencyReducer)).map((currency) => <option value={currency} >{currency}</option>)}
          </select>
          {
            checkedCurrencyForConvert
              ? <p className="main__message-block">1 UAH = {1 / currencyReducerArray[checkedCurrencyForConvert]} {checkedCurrencyForConvert}</p>
              : false
          }
        </div>
      </form>
    </>
  )
}