import React, { Component } from 'react'

class ClickCounter2 extends Component {
     
     
    render() {
        const { count,incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clikeddddd {count} times</button>
      </div>
    )
  }
}

export default ClickCounter2
