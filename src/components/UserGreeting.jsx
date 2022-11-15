/* eslint-disable no-mixed-operators */
/* eslint-disable react/require-render-return */
import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    render() {
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome true</div>
        // }
        // else {
        //     message = <div>welcome false</div>
        // }
        // return (<div>{message}</div>)


        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Raj
        //       </div>
        //    )
        // }
        // else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }


    // return (
    //   <div>
    //         Welcome Raj
    //         <div>
    //             Welcome Guest
    //         </div>
    //   </div>
    // )
        
        // return (
        //     this.state.isLoggedIn?<div>welcome true</div>:<div>Welcome false</div>
        // )

        return (
            this.state.isLoggedIn && <div>Welcome true</div>
        )
  }
}

export default UserGreeting
