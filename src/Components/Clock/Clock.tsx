import {useEffect, useState} from "react";


export const Clock = () => {
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
    <>
      <div>
        {date.toString()}
      </div>

    </>
  )
}