import React, { Component } from 'react'
import axios from 'axios';

class PostList extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           posts: [],
           errorMessage: ""
       }
     }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                console.log(response);
                this.setState({
                    posts: response.data
                })
            }).catch((error) => {
                console.log(error);
                this.setState({ errorMessage: "Retrieving data" });
        })
    }
     
    render() {
        const { posts,errorMessage } = this.state;
    return (
      <div>
            list of posts
            {
                posts.length ?
                    posts.map((post) => (
                        <div key={post.id}>{post.title}</div>
                    )):null
            }
            {errorMessage?<div>{errorMessage}</div>:null}
      </div>
    )
  }
}

export default PostList
