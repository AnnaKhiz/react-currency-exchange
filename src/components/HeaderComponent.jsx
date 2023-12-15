import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CONSTANTS} from '../js/CONSTANTS.js';
import { ConvertComponent } from './ConvertComponent.jsx';
import {getCurrencyAction} from '../actions';
import {useAPI} from "../js/useAPI";
import { backToPortfolio } from "../js/back.js";

export const HeaderComponent = () => {
  const dispatch = useDispatch();
  const currencyArray = useAPI(CONSTANTS.API);

  useEffect(backToPortfolio, []);

  useEffect(() => {
    currencyArray.forEach((element) => {
      dispatch(getCurrencyAction(element));
    });
  }, [currencyArray]);

  return (
    <>
      <div className="button-back" id="button-back"></div>
      <div className={"header__container"}>
        {<p className="header__text">1 USD = {useSelector(store => store.getCurrencyReducer['USD - Долар США'])} UAH</p>}
        {<p className="header__text">1 EUR = {useSelector(store => store.getCurrencyReducer['EUR - Євро'])} UAH</p>}
      </div>
      <ConvertComponent />
    </>
  )
}