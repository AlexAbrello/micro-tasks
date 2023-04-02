import {topCars} from "./App";

type CarsPropsType = {
  tableData: topCars[]
}

export function CarsTable(props: CarsPropsType) {

  const carsInfo = props.tableData.map((el, index) => {
    return (
        <li key={index}><span>{index + 1}</span> <span>{el.manufacturer}</span> <span>{el.model}</span></li>
    )
  })

  return (
      <ul>
        {carsInfo}
      </ul>
  )
}