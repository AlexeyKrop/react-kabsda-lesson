import React from "react";
import {Star} from "./UnConrolStar";

type RatingPropsType = {
  value: number;
  onClickStar: (value: number) => void
}

export function UnControlRating(props: RatingPropsType) {
  return (
    <div>
      {<Star value={props.value} onClickStar={props.onClickStar}/>}
      {/*{<Star onClickStar={props.onClickStar} selected={props.value > 2}/>}*/}
      {/*{<Star onClickStar={props.onClickStar} selected={props.value > 3}/>}*/}
      {/*{<Star onClickStar={props.onClickStar} selected={props.value > 4}/>}*/}
      {/*{<Star onClickStar={props.onClickStar} selected={props.value > 5}/>}*/}
    </div>
  )
}
