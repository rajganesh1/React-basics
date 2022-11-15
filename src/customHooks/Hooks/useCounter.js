import {useState} from 'react'

function useCounter(initialValue = 0, value) {
  const [count, setCount] = useState(initialValue);
    const increment = () => {
        setCount(prevCount => prevCount + value);
    }
    const decrement = () => {
        setCount(prevCount => prevCount - value);
    }
    const reset = () => {
        setCount(initialValue);
    }
    return [increment,decrement,reset,count]
}

export default useCounter
