import {useState} from "react";
import {Button} from "./Button";

type FilterType = 'All' | 'RUBLS' | 'Dollars'

type MoneyType = {
  banknots: string
  value: number
  number: string
}

export const Money = () => {

  const [money, setMoney] = useState<MoneyType[]>([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
  ])

  const [filter, setFilter] = useState<FilterType>("All")

  let currentMoney = money

  if (filter === 'RUBLS') {
    currentMoney = money.filter(e => e.banknots === 'RUBLS')
  }
  if (filter === 'Dollars') {
    currentMoney = money.filter(e => e.banknots === 'Dollars')
  }

  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  }

  return (
      <>
        <ul>
          {currentMoney.map((el, index) => {
            return (
                <li key={index}>
                  <span>{el.banknots}</span>
                  <span>{el.value}</span>
                  <span>{el.number}</span>
                </li>
            )
          })}
        </ul>
        <Button name={'All'} callBack={() => onClickFilterHandler('All')}/>
        <Button name={'Rubles'} callBack={() => onClickFilterHandler('RUBLS')}/>
        <Button name={'Dollars'} callBack={() => onClickFilterHandler('Dollars')}/>
      </>
  )
}