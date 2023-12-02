import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CONSTANTS} from '../js/CONSTANTS.js';
import { ConvertComponent } from './ConvertComponent.jsx';
import {getCurrencyAction} from '../actions';
import {useAPI} from "../js/useAPI";

export const HeaderComponent = () => {
  const dispatch = useDispatch();
  const currencyArray = useAPI(CONSTANTS.API);

  useEffect(() => {
    currencyArray.forEach((element) => {
      dispatch(getCurrencyAction(element));
    });
  }, [currencyArray]);
console.log(useSelector(store => store.getCurrencyReducer))
  return (
    <>
      <div className={"header__container"}>
        {<p className="header__text">1 USD = {useSelector(store => store.getCurrencyReducer['USD - Долар США'])} UAH</p>}
        {<p className="header__text">1 EUR = {useSelector(store => store.getCurrencyReducer['EUR - Євро'])} UAH</p>}
      </div>
      <ConvertComponent />
    </>
  )
}