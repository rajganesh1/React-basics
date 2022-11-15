import React, { Component } from 'react'
import updatedComponent from './withCounter'

class HoverCounter extends Component {
    
     
    render() {
        const { count } = this.props;
    return (
      <div>
            <h3 onMouseOver={this.props.incrementCount}>Hovered {count} times</h3>
      </div>
    )
  }
}
export default updatedComponent(HoverCounter,10);
