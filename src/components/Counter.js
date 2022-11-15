import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment() {
        // this.setState({ 
        //     count: this.state.count + 1
        // }, () => { console.log(this.state.count) });
        // console.log(this.state.count);//dont use this since this is sync function and runs before setState
        this.setState((prevState,props) => ({//always use prevstate callback function while using useState 
            count: prevState.count + 1//props is optional
        }))
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
  render() {
    return (
      <div>
            Count - {this.state.count}
            <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
