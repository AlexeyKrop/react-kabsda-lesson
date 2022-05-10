import React, {useState} from "react";

import {UnControlAccordionMenu} from "./UnControlAccordionMenu";
import {UnControlRating} from "./UnControlRating/UnControlRating";


function UnControlAccordion(props: any) {
  let [on, setOn] = useState(false)
  let [value, setValue] = useState(0)
  const onClickHandler = () => {
    on = !on
    setOn(on)
  }
  const onClickStar = (value: number) => {
    console.log(value)
    setValue(value)
  }
  return (
    <>
      <h2 onClick={onClickHandler}>{props.titleValue}</h2>
      <UnControlAccordionMenu on={on}/>
      <UnControlRating onClickStar={onClickStar} value={value}/>
    </>
  )
}

export default UnControlAccordion