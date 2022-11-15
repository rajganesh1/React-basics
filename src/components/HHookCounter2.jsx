import React, { useState} from 'react'

function HHookCounter2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
  return (
      <div>
          count: {count}
          <button onClick={() => setCount(initialCount)}>Reset</button>
          <button onClick={() => setCount(prevCount=>prevCount+1)}>Increment</button>
          <button onClick={()=> setCount(prevCount=>prevCount-1)}>Decrement</button>
    </div>
  )
}

export default HHookCounter2