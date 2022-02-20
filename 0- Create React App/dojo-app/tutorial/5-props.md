```js
import {useState} from 'react'
import BlogList from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum', author: 'Mario', id: 1},
        {title: 'Welcome Party!', body: 'lorem ipsum', author: 'Luigi', id: 2},
        {title: 'Web dev top tops', body: 'lorem ipsum', author: 'Yoshi', id: 3},
    ]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title={'All Blogs!'}/>
        </div>
     );
}
 
export default Home;
```


```js
const BlogList = (props) => {
    /*Data comiing from Home,js - <BlogList blogs={blogs} title={'All Blogs!'}/>*/
    const blogs = props.blogs;
    const title = props.title;

    console.log(blogs);
    console.log(blogs.title);


  return (
    <div className='blog-list'>
    <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
```