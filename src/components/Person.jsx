import React from 'react'

function Person({person}) {
  return (
      <div>
          <h2>
              I am {person.name}, I dont know {person.skill}
          </h2>
    </div>
  )
}

export default Person