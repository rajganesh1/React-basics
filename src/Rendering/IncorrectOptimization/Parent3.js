import React,{useState} from 'react'
// import { MemoizedChild3 } from './Child3';
import { MemoizedChildFour } from './Child4';

const Parent3 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('raj');
    console.log('ParentThree state');
  return (
    <div>
          <button onClick={() => setCount(c => c + 1)}>count-{count}</button>
          <button onClick={() => setName('Ganesh')}>{name}</button>
          {/* <MemoizedChild3 name={name} >
              <strong>Hellooo</strong>
          </MemoizedChild3> */}
          <MemoizedChildFour name={name} />
    </div>
  )
}
export default Parent3





