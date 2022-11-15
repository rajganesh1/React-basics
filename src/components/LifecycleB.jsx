import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Raj"
      }
        console.log('Lifecycle B constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount');
    }
    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }
    render() {
      console.log('Lifecycle B render');
    return (
      <div>
        LifeCycle B
      </div>
    )
  }
}

export default LifecycleB
