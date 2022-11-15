import React,{useState} from 'react'

function Counter13() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }
    const reset = () => {
        setCount(0);
    }
  return (
      <div>
          <h3>count-{count}</h3>
          <button onClick={()=>increment()}>Increment</button>
          <button onClick={()=>decrement()}>Decrement</button>
          <button onClick={()=>reset()}>Reset</button>
    </div>
  )
}

export default Counter13
