/* eslint-disable no-unused-vars */
import React,{useState,useEffect,useRef} from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalref = useRef()
    useEffect(() => {
        intervalref.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return (() => {
            clearInterval(intervalref.current);
        })
    },[])
  return (
    <div>
          Hook Timer -{timer}
          <button onClick={()=>clearInterval(intervalref.current)}>Pause</button>
    </div>
  )
}
//useRef-store mutable values and persists thruout the rerender ..not causing any additional render
//remembers the stored data even after other state variables causes re renders of this component

export default HookTimer
