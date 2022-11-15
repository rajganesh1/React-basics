import React, { useState } from 'react'

const initState = ['raj', 'ganesh'];

const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState);
    const handleClick = () => {
        // persons.push('usha');
        // persons.push('ram');
        // setPersons(persons);

        //when u push values into the array the array values change
        //but the array reference does not change..so use spread operator

        const newPerson = [...persons];
        newPerson.push('usha');
        newPerson.push('ram');
        setPersons(newPerson);
        //we are just mutating and not passing a new reference..so there is no
        //re rendering..so console log occurs only once
    }
    console.log('ArrayUseStateRender');
  return (
    <div>
          <button onClick={handleClick}>Click</button>
          {
              persons.map(person => (
                  <div key={person}>{person}</div>
              ))
          }
    </div>
  )
}

export default ArrayUseState

//mutating an object or an array will nor cause re render when used with useState\
// or useReducer
//To rerender, make a copy of the existing state, modify as necessary
//and then pass the new state to the setter func or while returning
//from the reducer func
//dont directly mutate the state
