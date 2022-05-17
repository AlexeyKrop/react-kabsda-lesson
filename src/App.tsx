import React, {useState} from 'react';
import './App.css';
import Select from "./Components/Select/Select";
import {UseMemoTest} from "./Components/UseMemoTest/UseMemoTest";

export type UserType = {
  id: number,
  name: string
}
export type countryType = {
  id: string
  city: Array<string>
  population: number
}
function App() {
  const [accordionCollapsed, setAccordionCollapsed] = useState(true)
  const [ratingValue, setRatingValue] = useState(0)
  const [user, setUser] = useState<Array<UserType>>([
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Victor'},
    {id: 3, name: 'Olga'}
  ])
  const [titleValue, setTitleValue] = useState('Menu')
  const showUserName = (id: number) => {
    user.map(u => u.id === id ?  setTitleValue(u.name) : '')
  }
  let [country, setCountry] = useState<Array<countryType>>([
    {id: 'Russia', city:['Moscow', 'Samara', 'Sochi'], population: 15000000},
    {id: 'Belarus', city:['Minsk', 'Gomel', 'Bobruisk'], population: 5000000},
    {id: 'USA', city:['New-York', 'Las-vegas', 'Washington'], population: 7000000},
  ])
  const changeFilter = () => {
    setCountry(country.filter(c => c.population > 5000000))
  }
  let [count, setCount] = useState(0)
  const plusCountHandler = () => {
    setCount(count = count + 1)
  }
  console.log('APPRender')
  return (
    <div className="App">
      <h2>This is component</h2>
      {/*<Accordion user={user} titleValue={titleValue} collapsed={accordionCollapsed}*/}
      {/*           setAccordionCollapsed={setAccordionCollapsed}*/}
      {/*           showUserName={showUserName}/>*/}
      {/*<Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>*/}
      {/*<Accordion titleValue='---User---' collapsed={false}/>*/}
      {/*<UnControlAccordion titleValue={'Menu'} />*/}
      {/*<Select user={user}/>*/}
      <button onClick={plusCountHandler}>+</button>
      {count}
      <Select/>
      <UseMemoTest country={country} changeFilter={changeFilter}/>
    </div>
  );
}

export default App;
