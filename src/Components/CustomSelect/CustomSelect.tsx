import React, {KeyboardEvent, useState} from "react";

export function CustomSelect(props: any) {
  let selectDefaultName = {...props.data[0]}
  console.log({...selectDefaultName})
  const [collapsed, setCollapsed] = useState(false)

  const [selectValue, setSelectValue] = useState('selectDefaultName')
  const showSelectName = (id: number, data: any) => {
    data.map((u: any) => u.id === id ? setSelectValue(u.name) : '')
  }
  return (
    <>
      <div onClick={() => {setCollapsed(collapsed)}} className={'menu__header'}>
        <h2 className={'menu__title'} >{selectValue}</h2>
        <svg className={'menu__icon'} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="32" height="32">
          <path
            d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
        </svg>
      </div>
      {!collapsed && <Option title={selectValue} {...restProps} />}
    </>
  )
}
function Option(props: any) {
  const onClickMenuListHandler = (id: number) => {
    props.showUserName(id)
    props.setAccordionCollapsed(!props.collapsed)
  }
  const onKeyUp = (e: KeyboardEvent<HTMLUListElement>) => {
    e.currentTarget.focus()
  }
  return (
    <ul className="menu" onKeyUp={onKeyUp} tabIndex={0}>
      {props.data.map((u: any) => <li onClick={() => {onClickMenuListHandler(u.id)}} key={u.id} className="menu__list" >{u.name}</li>)}
    </ul>
  )
}
import {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: string[]
  onChangeOption?: (option: string) => void

}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const mappedOptions: any = options?.map((o, index) => {
    return {options.map((u: any) => <div key={u.id} className="menu__list" >{u}</div>)}
  });

  return (
    <div className={'select-css'} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </div>
  )
}

export default SuperSelect
