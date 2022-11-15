import React from 'react'
import useCounter from './Hooks/useCounter'

function Counter12() {
    const [increment, decrement, reset, count] = useCounter(10,2);
  return (
      <div>
          <h3>count-{count}</h3>
          <button onClick={()=>increment()}>Increment</button>
          <button onClick={()=>decrement()}>Decrement</button>
          <button onClick={()=>reset()}>Reset</button>
    </div>
  )
}

export default Counter12
