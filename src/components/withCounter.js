import React, { Component } from 'react'

const updatedComponent = (OriginalComponent,incrementValue) => {
    class NewComponent extends Component{
        constructor(props) {
       super(props)
     
       this.state = {
          count: 0
       }
     }
    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count+incrementValue
            }
        })
    }
        
        render() {
            //const { name } = this.props;
            return (
                <OriginalComponent count={this.state.count} incrementCount={this.incrementCount}  {...this.props} />
            )
        }
    }
    return NewComponent
}

export default updatedComponent;