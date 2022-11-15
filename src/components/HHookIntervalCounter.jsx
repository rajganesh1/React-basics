import React,{useEffect, useState} from 'react'

function HHookIntervalCounter() {
    const [count, setCount] = useState(0);
    // const tick = () => {
    //     setCount(prevcount=>prevcount + 1)
    // }
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return (() => {
            clearInterval(interval);
       })
    }, [count])
  return (
      <div>
          {count}
    </div>
  )
}

export default HHookIntervalCounter