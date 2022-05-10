import React from "react";

type StarPropsType = {
  value: number
  onClickStar: (value: number)=> void
}


export function Star(props: StarPropsType) {
  const onClickHandler = (value: number) =>{
    props.onClickStar(value)
  }
  return (
    <>
      <span onClick={() => {onClickHandler(1)}}>{props.value > 0 ? <b>star</b>: <span>star</span>}  </span>
      <span onClick={() => {onClickHandler(2)}}>{props.value > 1 ? <b>star</b>: <span>star</span>}  </span>
      <span onClick={() => {onClickHandler(3)}}>{props.value > 2 ? <b>star</b>: <span>star</span>}  </span>
      <span onClick={() => {onClickHandler(4)}}>{props.value > 3 ? <b>star</b>: <span>star</span>}  </span>
      <span onClick={() => {onClickHandler(5)}}>{props.value > 4 ? <b>star</b>: <span>star</span>}  </span>
    </>
  )
}