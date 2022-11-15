import React,{useState} from 'react'
import { MemoizedChild2 } from './Child2';

const Parent2 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('raj');
    console.log('ParentTwo state');
  return (
    <div>
          <button onClick={() => setCount(c => c + 1)}>count-{count}</button>
          <button onClick={() => setName('Ganesh')}>{name}</button>
          <MemoizedChild2 name={name} />
    </div>
  )
}
export default Parent2

//here rerender is caused by state change
//component has no means of directly changing the props
//which means children props would'nt have changed




