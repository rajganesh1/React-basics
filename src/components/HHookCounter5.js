import React,{useState,useEffect} from 'react'

function HHookCounter5() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log(`useEffect - updating docs title`)
        document.title = `you clicked ${count} times`;
    },[count])
  return (
      <div>
          <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
          <button onClick={() => setCount(count + 1)}>Count {count} timesss</button>
    </div>
  )
}

export default HHookCounter5