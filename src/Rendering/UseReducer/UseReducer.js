import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    console.log('usereducer rendering');
  return (
    <div>
          <div>{count}</div>
          <button onClick={()=>dispatch('increment')}>Increment</button>
          <button onClick={()=>dispatch('decrement')}>decrement</button>
          <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer


//dispatch will cause rerender
//exception is when u update state to same valiue as curr state
//same value after initial render-> component will not rerender
//same value after initial rerender-> react will render that specific component one more time and then bails out from any subsequent renders
