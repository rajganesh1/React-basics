import React,{useState} from 'react'
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    console.log('Parent state');
  return (
    <div>
          <button onClick={() => setCount(c => c + 1)}>count-{count}</button>
          <button onClick={() => setCount(0)}>Count to 0</button>
          <button onClick={() => setCount(5)}>Count to 5</button>   
          <Child />
    </div>
  )
}
//setter function in useState will cause the component to re render
//incase of no no update.. no rerendering
//same value rerendering.. will rerender only once. 

export default Parent


//when a parent component renders, react will recursively render
//all of its child component
//if new state is same as old state, both parent and child do not
//re render
//new state same as old state after rerender..parent rerenders
//one more time but child never rerenders
