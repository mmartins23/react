```js
import {useState} from 'react'
import BlogList from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum', author: 'Mario', id: 1},
        {title: 'Welcome Party!', body: 'lorem ipsum', author: 'Luigi', id: 2},
        {title: 'Web dev top tops', body: 'lorem ipsum', author: 'Yoshi', id: 3},
        {title: 'My new website is getting an update', body: 'lorem ipsum', author: 'Mario', id: 4}
    ]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title={'All Blogs!'}/>
           <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title={'Mario\'s Blog'}/>
        </div>
     );
}
 
export default Home;
```