import {Clock} from "./Clock";
import React from "react";
import SuperSelect from "./Common/SuperSelect/SuperSelect";

export const ClockView = () => {

  return (
    <>
      <SuperSelect />
      <Clock mode={'analog'}/>
    </>
  )
}