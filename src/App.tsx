import React, {useMemo, useState} from 'react';
import './App.css';
import Country from "./Components/TaskUseMemo/Country";
import TaskReactMemo from "./Components/TaskReactMemo/TaskReactMemo";

export type UserType = {
  id: number,
  name: string
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
      {/*<button onClick={plusCountHandler}>+</button>*/}
      {/*{count}*/}
      {/*<Select/>*/}
      {/*<UseMemoTest country={country} callBack={changeFilterHandler}/>*/}
      {/*<Country />*/}
      <TaskReactMemo />
    </div>
  );
}

export default App;
