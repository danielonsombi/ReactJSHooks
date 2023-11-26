import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    //const [posts, setPosts] = useState([]) //used to get an array of all posts
    //To get a specific entry within the posts, initialize as an object
    const [post, setPost] = useState({})
    const [id, setId] = useState(1) //Introduced to help get a specific object within the posts array
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        //axios.get('https://jsonplaceholder.typicode.com/posts') //this gets all the posts
        //To get a specific post:
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                //setPosts(res.data) //for all posts
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[idFromButtonClick])
  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value) }/>
        <button type='button' onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
      {/* <ul>
        {
            posts.map(post => (
            <li key={post.id}>{post.title}</li> 
            ))
        }
      </ul> */}
    </div>
  )
}

export default DataFetching
