```js
import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {title: 'Web dev top tips',body: 'lorem ipsum...',author: 'Mario',id: 3}
  ])

  const [name, setName] = useState('Mario');
  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
    console.log(newBlogs);
    /*
    1) go through ALL elements of an array
    2) check if blog.id !== id
    3) if the step 2) returns false ( 1 !== 1 is FALSE statement because 1 === 1 ) LEAVE IT WHERE IT IS (original array)
    4) if the step 2) returns true ( 2 !== 1 and 3 !== 1 are both true statements ) MOVE THEM TO THE NEW ARRAY CALLED newBlogs
    5) set state (setBlogs) of the newBlogs AS A NEW ARRAY THAT WE WILL RENDER on screen
    6) thus blogs with id's 2 and 3 are visible on the page, and blog with id 1 is not (if it would be any clearer - newBlogs array will be placed instead of an old array on screen) */
  }

  useEffect(() => {
      console.log('use effect ran');
      console.log(name);
  }, [name])

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
      {/* <BlogList blogs={blogs.filter(blog => blog.author === 'Mario')}title={"Mario's Blog"} handleDelete={handleDelete}/> */}

      <button onClick={() => setName('Luigi')}>Change name</button>
      <p>{name}</p>
    </div>
  )
}

export default Home;
```