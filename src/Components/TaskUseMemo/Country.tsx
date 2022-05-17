import React, {useMemo, useState} from 'react';
import Select from "../Select/Select";

const Country = () => {
  const [country, setCountry] = useState([
    {id: 'Russia', city: 'Sochi', population: 100000},
    {id: 'Russia', city: 'Moscow', population: 2000000},
    {id: 'Russia', city: 'Samara', population: 2000000},
    {id: 'Russia', city: 'Rostov', population: 3000000},
    {id: 'Russia', city: 'Kazan', population: 10003000},
    {id: 'Russia', city: 'Izhevsk', population: 2000000},
    {id: 'Belarus', city: 'Minsk', population: 10000000},
    {id: 'Belarus', city: 'Vitebsk', population: 9000000},
    {id: 'Belarus', city: 'Brest', population: 99000000},
    {id: 'Belarus', city: 'Gomel', population: 17000000},
    {id: 'Belarus', city: 'Sochi', population: 61000000},
    {id: 'Usa', city: 'Washington', population: 41000000},
    {id: 'Usa', city: 'Las-Vegas', population: 31000000},
    {id: 'Usa', city: 'Boston', population: 12000000},
  ])
  let [counter, setCounter] = useState(0)

  const onclickHandler = () => {
    setCounter(++counter)
  }
  let filterForPopulation = useMemo(() => {
    return country.filter(c => c.population > 3000000)
  }, [country])
  let filterForName = useMemo(() => {
    return country.filter(c => c.population > 3000000)
  }, [country])
  let filterForCountry = useMemo(() => {
    return country.filter(c => c.id === 'Russia')
  }, [country])
  //
  // let filterForPopulation = country.filter(c => c.population > 3000000)
  // let filterForName = country.filter(c => c.city.indexOf('I') > -1)
  // let filterForCountry = country.filter(c => c.id === 'Russia')
  console.log('countRender')
  return (
    <div>
      <Select country={filterForPopulation}/>
      <Select country={filterForName}/>
      <Select country={filterForCountry}/>
      {counter}
      <button onClick={onclickHandler}>+</button>
    </div>
  );
};

export default Country;