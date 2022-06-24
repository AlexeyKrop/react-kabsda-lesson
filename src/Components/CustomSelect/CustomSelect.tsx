import React, {KeyboardEvent, useState} from "react";

type SuperSelectPropsType = {
  options?: string[]
  onChangeOption?: (option: string) => void

}
export const CustomSelect: React.FC<SuperSelectPropsType> = ({
                                                               options,
                                                             }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [selectValue, setSelectValue] = useState('')
  const onChangeSelectValue = (value: string) => {
    setSelectValue(value)
  }
  const onChangeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <>
      <div onClick={() => {
        setCollapsed(!collapsed)
      }} className={'menu__header'}>
        <h2 className={'menu__title'}>{selectValue}</h2>
        <svg className={'menu__icon'} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="32"
             height="32">
          <path
            d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/>
        </svg>
      </div>
      {collapsed && <Option data={options} onChangeSelectValue={onChangeSelectValue} onChangeCollapsed={onChangeCollapsed}/>}
    </>
  )
}

function Option(props: any) {
  const onClickMenuListHandler = (value: string) => {
    props.onChangeSelectValue(value)
    props.onChangeCollapsed()
  }
  const onKeyUp = (e: KeyboardEvent<HTMLUListElement>) => {
    e.currentTarget.focus()
  }
  return (
    <div className="menu" tabIndex={0}>
      {props.data.map((u: any) => <div   onClick={() => {
        onClickMenuListHandler(u)
      }} key={u.id} className="menu__list">{u}</div>)}
    </div>
  )
}

// import {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
//
// type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
//
// type SuperSelectPropsType = DefaultSelectPropsType & {
//   options?: string[]
//   onChangeOption?: (option: string) => void
//
// }

// const SuperSelect: React.FC<SuperSelectPropsType> = (
//   {
//     options,
//     onChange, onChangeOption,
//     ...restProps
//   }
// ) => {
//   const mappedOptions: any = options?.map((o, index) => {
//     return {options.map((u: any) => <div key={u.id} className="menu__list" >{u}</div>)}
//   });
//
//   return (
//     <div className={'select-css'} onChange={onChangeCallback} {...restProps}>
//       {mappedOptions}
//     </div>
//   )
// }
//
// export default SuperSelect
