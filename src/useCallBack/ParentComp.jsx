/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useCallback} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function ParentComp() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [age]);
    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [salary]);
  return (
    <div>
          <Title />
          <Count text='age' count={age} />
          <Button handleClick={incrementAge}>Increment Age</Button>

          <Count text='salary' count={salary} />
          <Button handleClick={incrementSalary}>Increment Salary</Button> 
    </div>
  )
}

//useMemo- caches the result from prevState
//useCallBack- caches the function from prevState

export default ParentComp
