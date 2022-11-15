import React, { Component } from 'react'

class HClassCounter extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
         count: 0,
         name: ''
       }
     }
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
  componentDidMount() {
    document.title = `clicked ${this.state.count} times`
  }
  componentDidUpdate(prevProps,prevState) {
    if (prevState.count ===! this.state.count) {
        document.title = `clicked ${this.state.count} times`
    
        console.log(`updating docs title`)
    }
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.name}
          onChange={(e) =>{this.setState({name:e.target.value})}} />
            <button onClick={()=>this.setState({count:this.state.count+1})}>Count {this.state.count} times</button>
      </div>
    )
  }
}

export default HClassCounter
