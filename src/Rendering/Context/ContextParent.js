import React, { useState } from 'react'
import { MemoizedChildA } from './ContextChild';

export const CountContext = React.createContext();
const Countprovider = CountContext.Provider;

const ContextParent = ({children}) => {
  const [count, setCount] = useState(0);
  console.log('ContextParent render')
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Count {count}</button>
      <Countprovider value={count}>
        {children} Same element reference technique(componeny cannot modify its own props which means children cannot be rerendered unless andd untill there is a change)
        <MemoizedChildA /> using React.memo
      </Countprovider>
    </div>
  )
}

export default ContextParent
