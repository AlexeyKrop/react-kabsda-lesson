import React from 'react';
import {countryType} from "../../App";

type useMemoPropsType = {
  country: Array<countryType>
}
export const UseMemoTest = (props: useMemoPropsType) => {
  return (
    <>
      <ul>
        {props.country.map((c, index) => {
          return <li key={index}>{c.city}</li>
        })}
      </ul>
      <button>filterForPopulation</button>
    </>
  );
};

