import React, {useState} from 'react';
const UserSecret = (props: {user: Array<string>}) => {
  console.log('render User')
  return <div> {props.user.map((u,i)=> <div key={i}>{u}</div>)}</div>
}
const User = React.memo(UserSecret)
const CounterSecret = (props: {count: number}) => {
  console.log('render Counter')
  return <div>{props.count}</div>
}
const Counter = React.memo(CounterSecret)
const TaskReactMemoSecret = () => {
  console.log('render TaskReactMemo')
  let [user, setUser] = useState([
    'lebron', 'curry', 'doncic'
  ])
  let [count, setCount] = useState(0)
  return (
    <div>
      <User user={user} />
      <Counter count={count}/>
      <button onClick={() => setCount(++count)}>+</button>
    </div>
  );
};
const TaskReactMemo = React.memo(TaskReactMemoSecret)
export default TaskReactMemo;