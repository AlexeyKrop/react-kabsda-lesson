import React, {useEffect, useState} from "react";
import s from './Clock.module.css'

type ClockPropsType = {
  mode: 'digital' | 'analog'
}
type ClockViewPropsType = {
  date: Date
}
export const addZeroInClock = (num: number) => num < 10 ? '0' + num : num
export const Clock = (props: ClockPropsType) => {
  const [date, setDate] = useState<Date>(new Date())
  useEffect(() => {
    let intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <>
      {props.mode === 'digital' ? <DigitalClockView date={date}/> : <AnalogClockView date={date}/>}

    </>
  )
}
export const DigitalClockView: React.FC<ClockViewPropsType> = React.memo(({date}) => {
  console.log('DigitalClockView render')
  return (
    <div id={s.clock}>
      <p className={s.date}>{`${date.getDate()} - ${addZeroInClock(date.getMonth() + 1)} - ${date.getFullYear()}`}</p>
      <span className={s.time}>{addZeroInClock(date.getHours())}:</span>
      <span className={s.time}>{addZeroInClock(date.getMinutes())}:</span>
      <span className={s.time}>{addZeroInClock(date.getSeconds())}</span>
    </div>
  )
})
export const AnalogClockView: React.FC<ClockViewPropsType> = React.memo(({date}) => {
  console.log('AnalogClockView render')
  return (
    <span>'Analog'</span>
  )
})