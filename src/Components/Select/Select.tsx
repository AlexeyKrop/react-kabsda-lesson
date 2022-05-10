import React, {ChangeEvent, useState} from 'react';
import {UserType} from "../../App";
type SelectType = {
  user: Array<UserType>
}
const Select = (props:SelectType) => {
  const[value, setValue] = useState('Menu')
  const onchangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>)=>{
    setValue(e.currentTarget.value)
  }
  return (
    <div>
      <select value={value} onChange={onchangeSelectHandler} className={'select__header'}>
        {props.user.map(u => <option className={'option__header'} key={u.id}>{u.name}</option>)}
      </select>
    </div>
  );
};

export default Select;