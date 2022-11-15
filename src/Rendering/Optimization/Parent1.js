import React,{useState} from 'react'

const Parent1 = ({children}) => {
    const [count, setCount] = useState(0);
    console.log('ParentOne state');
  return (
    <div>
          <button onClick={() => setCount(c => c + 1)}>count-{count}</button>
          {children}
    </div>
  )
}
export default Parent1

//here rerender is caused by state change
//component has no means of directly changing the props
//which means children props would'nt have changed




