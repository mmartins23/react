install react route package
```js
npm install react-router-dom@5
```

Once istallation is complete, check the package.json
```js
{
  "name": "dojo-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
  ```

  ```js
  import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <div className='content'>
      <Switch>
        <Route path='/'>
        <Home/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  )
}

export default App
```