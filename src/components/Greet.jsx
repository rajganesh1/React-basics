/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import { render } from '@testing-library/react';
import React, { Component } from 'react'

class Greet extends Component {
    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    };
    render() {
        const { onIncrement, name, counter, } = this.props;
        let classey = this.getBadgeClasses();
        return (
            <div className='dummy-class'>
                <button onClick={() => onIncrement(counter)}>Action {counter.id}</button>
                <span style={this.styles} className={classey}>{this.formatCount()}</span>
                <h6>Hello {name} from Greet</h6>
            </div>);
    }
    formatCount(){
        const count = this.props.counter.value;
        return count;
    }
     getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value <= 0) ? "warning" : "primary";
        return classes;
  }
    //return React.createElement('div', {id:'hello',className:'dummyClass'},React.createElement('h1'),null,'Hello Raj from function');
}



export default Greet;