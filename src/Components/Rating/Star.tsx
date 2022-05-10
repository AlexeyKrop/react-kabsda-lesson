import React from "react";

type StarPropsType = {
  selected: boolean
  value: number
  setRatingValue: (value: number) => void
}

export function Star(props: StarPropsType) {
  return (
    <>
      <span onClick={() => {
        props.setRatingValue(props.value)
      }}>
        {props.selected ? <b>star </b> : 'star '}
      </span>
    </>
  )
}