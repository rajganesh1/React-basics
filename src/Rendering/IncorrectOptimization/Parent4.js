/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo, useCallback } from 'react';
import { MemoizedChild5 } from './Child5';

const Parent4 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('raj');

    const person = {
        firstName: 'Raj',
        lastName: 'Ganesh'
    };

    const memoizedPerson = useMemo(() => person, []);

    const handleClick = () => {
        
    };

    const memoizedHandleClick = useCallback(handleClick, []);
    console.log('ParentFour state');
  return (
    <div>
          <button onClick={() => setCount(c => c + 1)}>count-{count}</button>
          <button onClick={() => setName('Ganesh')}>{name}</button>
          <MemoizedChild5 name={name} person={memoizedPerson} handleClick={memoizedHandleClick} />
    </div>
  )
}
export default Parent4

//every time Parent4 component is re-rendered, a new reference to object person is created
//and then passed down to child5 as props, so React.memo will not work here

//same behaviour for functions also(handleClick)





