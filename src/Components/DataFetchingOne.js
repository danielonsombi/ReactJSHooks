import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    //To load data:
    const [loading, setLoading] = useState(true)

    //Display an error if something went wrong
    const [error, setError] = useState('')

    //Variable to hold the fetched data:
    const [post, setPost] = useState({})

    //UseEffect with an empty array to ensure the function is called once:
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
            })
    }, [])

  return (
    <div>
        {loading ? 'Loading' : post.title}
        {error ? error : null}
    </div>
  )
}

export default DataFetchingOne
