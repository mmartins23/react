```js

import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    fetch('http://localhost:8000/blogs') 
      .then(res => { 
          if(!res.ok) {
              throw Error('Could not fetch the data for that resource'); // If the response is not ok, throw this error
          }
        return res.json() 
      })
      .then(data => { 
        console.log(data);
        setBlogs(data); 
        setIsPending(false); 
      })
      .catch(err => { //This catches any kind of network error and it will fire a function
          setError(err.message);
      })
  }, [])

  return (
   
    <div className='home'>
      {error && <div>{error}</div>},
      {isPending && <div>Loading ...</div>}, 
      {blogs && <BlogList blogs={blogs} title='All Blogs' />} 
    </div>
  )
}

export default Home

```