import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: []
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'fetch_success':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'fetch_error':
            return {
                loading: false,
                post: [],
                error: 'Something went wrong'
            }
        default:
            return state
    }
}
function DataFetching2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                dispatch({type:'fetch_success',payload: response.data})
            })
            .catch((err) => {
                dispatch({type:'fetch_error'})
            })
    },[])
  return (
    <div>
          {state.loading ? 'loading' : state.post.title}
          {state.error?state.error:null}
    </div>
  )
}

export default DataFetching2
