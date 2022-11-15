import React, { Component } from 'react'
import updatedComponent from './withCounter'

class ClickCounter extends Component {
     
     
    render() {
    return (
      <div>
            <button onClick={this.props.incrementCount}>{ this.props.name} Clicked {this.props.count} Times</button>
      </div>
    )
  }
}

export default updatedComponent(ClickCounter,5);

//this.props.name coming fromm app.js goes directly to updatedComponent
