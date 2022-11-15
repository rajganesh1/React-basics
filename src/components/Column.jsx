/* eslint-disable array-callback-return */
import React from 'react'

function Column() {
    const items = [];
    return (
        items.map((item) => {
            <React.Fragment key={ item.id}>
                <h6>{item.title}</h6>
            <td>Name</td>
            <td>Raj</td>
        </React.Fragment>
      })
  )
}

export default Column