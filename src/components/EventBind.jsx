import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: 'Hello'
      }
        this.Eventhandle = this.Eventhandle.bind(this);//binding in the class constructor
    }
    Eventhandle=()=> {
        this.setState({ message: 'Bye' });
    }
    render() { 
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={()=>this.Eventhandle()}>ClickBind</button>
            </div>
        );
    }
}
 
export default EventBind;