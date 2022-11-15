import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
            console.log('Regular comp');
    return (
      <div>
        Regular comp {this.props.name}
      </div>
    )
  }
}

export default RegularComp
