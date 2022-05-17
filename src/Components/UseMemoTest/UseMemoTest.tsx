import React from 'react';
import {countryType} from "../../App";

type useMemoPropsType = {
  country: Array<countryType>
  changeFilter: () => void
}
export const UseMemoTest = (props: useMemoPropsType) => {
  console.log('countryRender')
  const changeFilterHandler = () => {
    props.changeFilter()
  }
  return (
    <>
      <ul>
        {props.country.map((c, index) => {
          return <li key={index}>{c.city}</li>
        })}
      </ul>
      <button onClick={changeFilterHandler}>filterForPopulation</button>
    </>
  );
};

