import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HDataFetching() {
    const [posts, setposts] = useState({});
    const [id, setid] = useState(1);
    const [error, seterror] = useState('');
    const [idfrombuttonclick, setidfrombuttonclick] = useState(1);
    const handlePost = () => {
        setidfrombuttonclick(id);
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
            .then((response) => {
                console.log(response)
                setposts(response.data)
            })
            .catch((err) => {
                console.log(err)
                setposts('')
                seterror(err.message)
            });
    },[idfrombuttonclick])
  return (
      <div>
          <input type='text' value={id} onChange={(e) => setid(e.target.value)} />
          <button onClick={handlePost}>Fetch Post</button>
          {/*{posts.map((post) => 
          <ul key={post.id}><li>{post.title}</li></ul>)} */}
          <div>{posts.title}</div>
          <div>{error.length?error:null }</div>
    </div>
  )
}

export default HDataFetching