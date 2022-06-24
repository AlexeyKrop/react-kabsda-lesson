import React, { useState } from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import { ClockView } from "./Components/Clock/ClockView";
import {CustomSelect} from "./Components/CustomSelect/CustomSelect";

export type UserType = {
  id: number,
  name: string
}

function App() {
  // const [accordionCollapsed, setAccordionCollapsed] = useState(true)
  // const [ratingValue, setRatingValue] = useState(0)
  // const [user, setUser] = useState<Array<UserType>>([
  //   { id: 1, name: 'Bob' },
  //   { id: 2, name: 'Victor' },
  //   { id: 3, name: 'Olga' }
  // ])
  // const [titleValue, setTitleValue] = useState('Menu')
  // const showUserName = (id: number) => {
  //   user.map(u => u.id === id ? setTitleValue(u.name) : '')
  // }
  const arr = ['x', 'y', 'z']
  return (
    <div className="App">
      <h2>This is component</h2>
      <CustomSelect options={arr}/>
      {/*<Accordion user={user} titleValue={titleValue} collapsed={accordionCollapsed}*/}
      {/*  setAccordionCollapsed={setAccordionCollapsed}*/}
      {/*  showUserName={showUserName} />*/}
      {/*<Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>*/}
      {/*<Accordion titleValue='---User---' collapsed={false}/>*/}
      {/*<UnControlAccordion titleValue={'Menu'} />*/}
      {/*<Select user={user}/>*/}
      {/*<button onClick={plusCountHandler}>+</button>*/}
      {/*{count}*/}
      {/*<Select/>*/}
      {/*<UseMemoTest country={country} callBack={changeFilterHandler}/>*/}
      {/*<Country />*/}
      {/*<TaskReactMemo />*/}
      {/* <ClockView />*/}
    </div>
  );
}

export default App;
