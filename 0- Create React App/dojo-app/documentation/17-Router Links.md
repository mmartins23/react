import link from react router dom
```js
import { Link } from "react-router-dom";
```

add <LINK>

```js
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Bar</h1>
            <div className="links"></div>
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </nav>
     );
}
 
export default Navbar;
```