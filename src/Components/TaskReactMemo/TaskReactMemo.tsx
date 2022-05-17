import React, {useState} from 'react';
const User = (props: {user: Array<string>}) => {
  console.log('render User')
  return <div> {props.user.map((u,i)=> <div key={i}>{u}</div>)}</div>
}
const Counter = (props: {count: number}) => {
  console.log('render Counter')
  return <div>{props.count}</div>
}
const TaskReactMemo = () => {
  console.log('render TaskReactMemo')
  let [user, setUser] = useState([
    'lebron', 'curry', 'doncic'
  ])
  let [count, setCount] = useState(0)
  return (
    <div>
      <User user={user} />
      <Counter count={count}/>
    </div>
  );
};

export default TaskReactMemo;