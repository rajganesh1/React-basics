import React, { Component } from 'react'

export class FragmentDemo extends Component {
  render() {
      return (
        <React.Fragment>
      <div className='App'>
        Fragment Demo
        </div>
              <p>This tells ReactFragments</p>
        </React.Fragment>
    )
  }
}

export default FragmentDemo
