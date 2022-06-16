import React, {useEffect, useState} from "react";
import s from './DigitalClockView.module.css'
import style from './AnalogClockView.module.css'

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
    <div className={style.clock}>
      <div
        className={style['hour_hand']}
        style={{
          transform: `rotateZ(${date.getHours() * 30}deg)`
        }}
      />
      <div
        className={style['min_hand']}
        style={{
          transform: `rotateZ(${date.getMinutes() * 6}deg)`
        }}
      />
      <div
        className={style['sec_hand']}
        style={{
          transform: `rotateZ(${date.getSeconds() * 6}deg)`
        }}
      />
      <span className={style.twelve}>12</span>
      <span className={style.one}>1</span>
      <span className={style.two}>2</span>
      <span className={style.three}>3</span>
      <span className={style.four}>4</span>
      <span className={style.five}>5</span>
      <span className={style.six}>6</span>
      <span className={style.seven}>7</span>
      <span className={style.eight}>8</span>
      <span className={style.nine}>9</span>
      <span className={style.ten}>10</span>
      <span className={style.eleven}>11</span>
    </div>
  )
})