import React, {useEffect, useState} from "react";
import { ConvertComponent } from './ConvertComponent.jsx';

export const HeaderComponent = (props) => {
  const [res, setRes] = useState([]);
  const [usd, setUSD] = useState('');
  const [eur, setEUR] = useState('');

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then(res => res.json())
      .then(
        (result) => {
          setRes(result.filter((item) => item.cc === 'EUR' || item.cc === 'USD'))
        },
        (error) => {
          throw error;
        })
  },[])

  useEffect(() => {
    res.forEach(e => e.cc === 'USD'
      ? setUSD(e.rate.toFixed(1))
      : setEUR(e.rate.toFixed(1)))
  },[res])

  return (
    <>
      <div className={"header__container"}>
        {usd ? <p className="header__text">1 USD = {usd} UAH</p> : 0}
        {eur ? <p className="header__text">1 EUR = {eur} UAH</p> : 0}
      </div>
      <ConvertComponent usd={usd} eur={eur}/>
    </>
  )
}