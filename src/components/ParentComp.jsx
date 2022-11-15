import React, { Component } from 'react'
import MemoComp from './MemoComp'
//import PureComp from './PureComp'
//import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Raj Ganesh'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'Raj Ganesh'
            })
        },2000)
    }
    
    render() {
      console.log('Parent comp');
    return (
      <div>
            Parent Comp
            <MemoComp name={this.state.name} />
            {/*<RegularComp name={this.state.name}></RegularComp>
            <PureComp name={this.state.name}></PureComp>*/}
      </div>
    )
  }
}

export default ParentComp


//pure comp does a shallow comparison with currState,prevState and currProps,prevProps and check is there is any change..then only it will be re-rendered
