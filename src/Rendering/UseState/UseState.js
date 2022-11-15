import React,{useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    console.log('useState render');
  return (
    <div>
          <button onClick={() => setCount(c => c + 1)}>count-{count}</button>
          <button onClick={() => setCount(0)}>Count to 0</button>
          <button onClick={() => setCount(5)}>Count to 5</button>         
    </div>
  )
}
//setter function in useState will cause the component to re render
//incase of no no update.. no rerendering
//same value rerendering.. will rerender only once. 

export default UseState
