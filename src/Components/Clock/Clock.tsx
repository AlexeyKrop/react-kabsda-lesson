import React, {useEffect, useState} from "react";
import s from './Clock.module.css'

export const Clock = React.memo(() => {
  const [date, setDate] = useState<Date>(new Date())
  const addZeroInClock = (num: number) => num < 10 ? '0' + num : num
  useEffect(() => {
    let intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return() => {
      clearInterval(intervalId)
    }
  }, [])
  return (
      <div id={s.clock}>
        <p className={s.date}>{`${date.getDate()} - ${addZeroInClock(date.getMonth() + 1)} - ${date.getFullYear()}`}</p>
        <span className={s.time}>{addZeroInClock(date.getHours())}:</span>
        <span className={s.time}>{addZeroInClock(date.getMinutes())}:</span>
        <span className={s.time}>{addZeroInClock(date.getSeconds())}</span>
      </div>
  )
})