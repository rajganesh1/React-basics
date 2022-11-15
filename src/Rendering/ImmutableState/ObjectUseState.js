import React,{useState} from 'react'


const initState = {
    firstName: 'Raj',
    lastName: 'Ganesh'
}
const ObjectUseState = () => {
    const [person, setPerson] = useState(initState);
    const changeName = () => {
        // person.firstName = 'usha';
        // person.lastName = 'Ram';
        // setPerson(person);

        const newPerson = { ...person };
        newPerson.firstName = 'usha';
        newPerson.lastName = 'Ram';
        setPerson(newPerson);
    }
    console.log('objectusestate render');
  return (
    <div>
      <button onClick={changeName}>{person.firstName} {person.lastName}</button>
    </div>
  )
}

export default ObjectUseState

