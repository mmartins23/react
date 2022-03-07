Create a new file
create a function
custom hook need to start with the word use
import useEffect and useState
update the const blogs to data, so it will be re-usable
use return { data, isPending, error } so data can be returned

Pass in the  the url into the function rather than hard code it here because
again if we're using this use fetch hook in another file or a different component

instead we'll pass in an url as a parameter and that will be
what we fetch so this is going to be the end point and we need to pass it into
use fetch whenever we call it in the future
now that also means that we're going to place the url as a dependency to use effect and that means that whenever the url changes
it's going to re-run this function to get the data
```js
import { useState, useEffect } from 'react'

const useFetch = url => {
  // This is how to create useFetch
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          // error coming back from server
          throw Error('could not fetch the data for that resource')
        }
        return res.json()
      })
      .then(data => {
        setIsPending(false)
        setData(data)
        setError(null)
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false)
        setError(err.message)
      })
  }, [url])

  return { data, isPending, error }
}

export default useFetch
```

```js
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
```