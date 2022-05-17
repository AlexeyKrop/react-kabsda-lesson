import React, {ChangeEvent, useState} from 'react';
import {countryType, UserType} from "../../App";
type SelectType = {
  user?: Array<UserType>
  country? : Array<countryType>
}
const SelectM = (props:SelectType) => {
  const[value, setValue] = useState('Menu')
  const onchangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>)=>{
    setValue(e.currentTarget.value)
  }
  return (
    <div>
      <select value={value} onChange={onchangeSelectHandler} className={'select__header'}>
        {props.user && props.user.map(u => <option className={'option__header'} key={u.id}>{u.name}</option>)}
        {props.country && props.country.map(c => <option className={'option__header'} key={c.id}>{c.city}</option>)}
      </select>
    </div>
  );
};
const Select = React.memo(SelectM)
export default Select;