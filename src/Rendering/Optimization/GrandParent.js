import React,{useState} from 'react'
import Child1 from './Child1';
import Parent1 from './Parent1';

const GrandParent = () => {
    const [newCount, setnewCount] = useState(0);
  return (
    <div>
          <button onClick={() => setnewCount(prevCount => prevCount + 1)}>GrandParent count-{newCount}</button>
          <Parent1 newCount={newCount}>
              <Child1 />
          </Parent1>
    </div>
  )
}

export default GrandParent

//parent rendered->all child rendered..but unnecessary renders
//where the child component goes thru render phase but not commit phase
//but for opy=timization..we can extract the expensive child component 
//and instead pass it down as props to the parent component
