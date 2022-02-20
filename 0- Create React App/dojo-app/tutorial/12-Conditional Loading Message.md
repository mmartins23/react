```js
import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetch('http://localhost:8000/blogs') 
      .then(res => { 
        return res.json() 
      })
      .then(data => { 
        console.log(data);
        setBlogs(data); 
        setIsPending(false); //setIsPending to when blogs appears to the browser, so <div>Loading ...</div> disapears
      })
  }, [])

  return (
      // We use a logical operator, if the conditional on the left is true, will the thing on the right be output to the browser. Example below, if isPending is true display <div>Loading ...</div> to the browser and if blogs is true display to the browser
    <div className='home'>
      {isPending && <div>Loading ...</div>}, 
      {blogs && <BlogList blogs={blogs} title='All Blogs' />} 
    </div>
  )
}

export default Home
```