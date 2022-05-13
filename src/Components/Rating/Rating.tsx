import React from "react";
import {Star} from "./Star";

type RatingPropsType = {
  ratingValue: number;
  setRatingValue: (value: number) => void
}

function RatingM(props: RatingPropsType) {
  return (
    <div>
      {<Star value={1}  setRatingValue={props.setRatingValue}  selected={props.ratingValue > 0}/>}
      {<Star value={2}  setRatingValue={props.setRatingValue}  selected={props.ratingValue > 1}/>}
      {<Star value={3}  setRatingValue={props.setRatingValue}  selected={props.ratingValue > 2}/>}
      {<Star value={4}  setRatingValue={props.setRatingValue} selected={props.ratingValue > 3}/>}
      {<Star value={5}  setRatingValue={props.setRatingValue} selected={props.ratingValue > 4}/>}
    </div>
  )
}
export const Rating = React.memo(RatingM)