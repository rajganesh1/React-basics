import React, { useReducer } from 'react'

const initialState = ['Raj', 'Ganesh'];
const reducer = (state,action) => {
    switch (action) {
        case 'handleClick':
            const newState = [...state];
            newState.push('usha');
            newState.push('ram');
            return newState;
        default:
            return state;
    }
}

console.log('Arrayusestatereducer');

const ArrayUseStateReducer = () => {
    const [persons, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
          <button onClick={() => dispatch('handleClick')}>Click</button>
          {
              persons.map((person) => (
                  <div key={person}>{person}</div>
              ))
          }
    </div>
  )
}

export default ArrayUseStateReducer
