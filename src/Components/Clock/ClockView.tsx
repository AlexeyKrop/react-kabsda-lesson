import {Clock} from "./Clock";
import React, {useState} from "react";
import SuperSelect from "./Common/SuperSelect/SuperSelect";
export type ClockPropsType = {
  mode: string
}
const mode = ['digital', 'analog']
export const ClockView = () => {
  const [value, onChangeOption] = useState<string>('analog')
  return (
    <>
      <SuperSelect options={mode} value={value} onChangeOption={onChangeOption}/>
      <Clock mode={value}/>
    </>
  )
}