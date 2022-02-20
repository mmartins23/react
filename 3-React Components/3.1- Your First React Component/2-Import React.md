# Import React
Wooo! Your first React component!

In the last exercise, we started by importing from react. The line that did this is:

```js
import React from 'react';
```
This creates an object named React which contains methods necessary to use the React library.

Later, we’ll go over where the React library is imported from, and how the importing process works. For now, just know that this is how we import the React library.

You’ve already seen one of the methods contained in the React library: React.createElement(). Recall that when a JSX element is compiled, it transforms into a React.createElement() call.

For this reason, you have to import the React library, and save it in a variable named React, before you can use any JSX at all. React.createElement() must be available in order for JSX to work.

***

```js
import React from 'react';
```