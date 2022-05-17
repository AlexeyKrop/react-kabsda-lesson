import React, {ChangeEvent, useState} from 'react';

export type countryType = {
  id: string
  city: string
  population: number
}
type SelectType = {
  // user?: Array<UserType>
  country? : Array<countryType>
}

const SelectM = (props:SelectType) => {
  console.log('SelectMChange')
  const[value, setValue] = useState('Menu')
  const onchangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>)=>{
    setValue(e.currentTarget.value)
  }
  return (
    <div>
      <select value={value} onChange={onchangeSelectHandler} className={'select__header'}>
        {/*{props.user && props.user.map(u => <option className={'option__header'} key={u.id}>{u.name}</option>)}*/}
        {props.country && props.country.map((c,index) => <option className={'option__header'} key={index}>{c.city}</option>)}
      </select>
    </div>
  );
};
const Select = React.memo(SelectM)
export default Select