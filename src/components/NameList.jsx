import React from 'react'
import Person from './Person';

export default function NameList() {
    const names = ['Raj', 'Ganesh', 'usharam'];
    const persons = [
        {
            id: 1,
            name: 'Raj',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Sou',
            skill: 'Vue'
        }
    ]
  return (
    <div>
          <ul>{names.map((name, index) => <li key={index}>{name}  {index}</li>)}</ul>
          <ul>{persons.map((person,index) => <li><Person key={index} person={person} /></li>)}</ul>
    </div>
  )
}
