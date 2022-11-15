import React, {useState } from 'react'

function HHookCounter3() {
    const [name, setName] = useState({firstName:'',lastName: ''});
  return (
    <div>
          <input type='text' value={name.firstName}
              onChange={e => setName({...name, firstName:e.target.value})} />
          <input type='text' value={name.lastName}
              onChange={e => setName({...name, lastName:e.target.value})} />   
          <h3>your firstName={name.firstName}</h3>
          <h3>your lastName={name.lastName}</h3>
          <h3>{JSON.stringify(name) }</h3>
    </div>
  )
}

export default HHookCounter3