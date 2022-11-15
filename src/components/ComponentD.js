import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './UserContext'

class ComponentD extends Component {
    static contextType=UserContext
  render() {
    return (
        <div>
            component D context {this.context}
        <ComponentE />
      </div>
    )
  }
 }



export default ComponentD
