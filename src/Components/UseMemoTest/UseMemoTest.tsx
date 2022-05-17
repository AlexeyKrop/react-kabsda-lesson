import React from 'react';
import {countryType} from "../../App";

type useMemoPropsType = {
  country: Array<countryType>
  callBack?: () => void
}
const UseMemoTestM = (props: useMemoPropsType) => {
  const changeFilterHandler = () => {
    props.callBack && props.callBack()
  }
  console.log('countryRender')
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
export const UseMemoTest = React.memo(UseMemoTestM)

