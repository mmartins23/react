Use a Conditional in a Render Function
How might you use a conditional statement inside of a render() function?

Select TodaysPlan.js to see one way of doing it.

Notice that the if statement is located inside of the render function, but before the return statement. This is pretty much the only way that you will ever see an if statement used in a render function.

***

```js
import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);
```