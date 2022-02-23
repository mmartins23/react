```js
import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {title: 'Web dev top tips',body: 'lorem ipsum...',author: 'mario',id: 3}
  ])

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
    /*
    1) go through ALL elements of an array
    2) check if blog.id !== id
    3) if the step 2) returns false ( 1 !== 1 is FALSE statement because 1 === 1 ) LEAVE IT WHERE IT IS (original array)
    4) if the step 2) returns true ( 2 !== 1 and 3 !== 1 are both true statements ) MOVE THEM TO THE NEW ARRAY CALLED newBlogs
    5) set state (setBlogs) of the newBlogs AS A NEW ARRAY THAT WE WILL RENDER on screen
    6) thus blogs with id's 2 and 3 are visible on the page, and blog with id 1 is not (if it would be any clearer - newBlogs array will be placed instead of an old array on screen) */
  }

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter(blog => blog.author === 'Mario')}
        title={"Mario's Blog"}
      />
    </div>
  )
}

export default Home;
```

```js
const BlogList = ({blogs,title,handleDelete}) => {
    /*Data comiing from Home,js - <BlogList blogs={blogs} title={'All Blogs!'}/>*/
    // const blogs = props.blogs;
    // const title = props.title;
    console.log(blogs);
    console.log(blogs.title);


  return (
    <div className='blog-list'>
    <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;

```