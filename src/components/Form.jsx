import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          username: '',
          comments: '',
          topic: 'React'
      }
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username},${this.state.comments}, ${this.state.topic}`)
        event.preventDefault();
    }
    
    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName</label>
                <input type='text'
                    value={this.state.username}
                    onChange={this.handleUserNameChange} />
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments}
                    onChange={this.handleCommentsChange} />
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange }>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form


//mounting lifecycle methods

//1. constructor(props)
//2. static getDerivedStateFromProps(props,state)
//3. render() read props and return jsx(dont make ajax calls or interact with DOM)
//4. componenetDidMount()(call ajax and interract with DOM ..called after components rendered in DOM )
//
//
//
//updating lifecycle methods
//1. static getDerivedStateFromProps(props,state)(called when every time a component is re-rendered and used to set the state and no http methods are allowed)
//2. shouldComponentUpdate(nextProps,nextState)(dictates id components should re-render or not)(no http or setState)
//3. render() 
//4. getSnapshotBeforeUpdate(prevProps, prevState)(called right before the changes from virtual Dom are to be reflected to DOM)(return null or a value) (capture some info from DOM)
//5. componentDidUpdate(prevProps,prevState,snapshot)(after render is finished in re-render cycles)(can make ajax calls by comparing currProps and prevProps)
//
//
//unmountingphase
//1. componentWillUnmount() (method inviked immediatley b4 a component is unmounted or destriyed)(donyt call setstate)(used to cancekl any events lke event handlers.. cancel subscription)
//
//ErrorHandling Phase
//1. static getDervicedStateFromError(error)
//2. componentDidCatch(error,info)(when there is an error either during rendering in a lifecycle method or constructor of any child component)

