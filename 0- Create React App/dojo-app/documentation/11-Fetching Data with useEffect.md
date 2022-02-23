```js

import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null) // I set the initial value of the blog to  null, then once we've sucessfully fecthed the data from db.json, we're going to update this state using setBlogs with the data we get back 

  useEffect(() => {
    fetch('http://localhost:8000/blogs') // Get request from localhost port 8000
      .then(res => { 
        return res.json() // Once we have the data back. we get a response object, to get the data we use the fetch api - res.json
      })
      .then(data => { // this function takes in as a parameter the actual data that this get us
        console.log(data);
        setBlogs(data); // Passing the data to the function setBlogs, basically what this is doing is taking the arrays of objects and updating the blogState with that array
      })
  }, [])

  return (
    <div className='home'>
      {blogs && <BlogList blogs={blogs} title='All Blogs' />}
    </div>
  )
}

export default Home

  ```