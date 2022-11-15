import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Raj"
      }
        console.log('Lifecycle A constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('Lifecycle A shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
    changeState = ()=> {
        this.setState({
            name: 'Ganesh'
        })
    }
    render() {
      console.log('Lifecycle A render');
        return (
        <div>
            <div>
                LifeCycle A
                </div>
                <button onClick={this.changeState}>Change State</button>
            <LifecycleB />
        </div>
    )
  }
}

export default LifecycleA
