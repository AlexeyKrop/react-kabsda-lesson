import React from 'react';
import {countryType} from "../../App";

type useMemoPropsType = {
  country: Array<countryType>
}
const UseMemoTestM = (props: useMemoPropsType) => {
  console.log('countryRender')
  return (
    <>
      <ul>
        {props.country.map((c, index) => {
          return <li key={index}>{c.city}</li>
        })}
      </ul>
    </>
  );
};
export const UseMemoTest = React.memo(UseMemoTestM)

