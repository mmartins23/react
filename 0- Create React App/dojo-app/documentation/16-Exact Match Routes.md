create new component, Create.js

```js
const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
        </div>
     );
}
 
export default Create;
```

Include the switch, route

```js
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <div className='content'>
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route path='/create'>
        <Create/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  )
}
```