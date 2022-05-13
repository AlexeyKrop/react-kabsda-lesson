import React from "react";

type StarPropsType = {
  selected: boolean
  value: number
  setRatingValue: (value: number) => void
}

function StarM(props: StarPropsType) {
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
export const Star = React.memo(StarM)