# Import ReactDOM
In order to create our first component, we next imported the ReactDOM:

```js
import ReactDOM from 'react-dom';
```
This line of code is very similar to line 1.

Both import JavaScript objects. In both lines, the imported object contains React-related methods.

However, there is a difference!

The methods imported from 'react-dom' are meant for interacting with the DOM. You are already familiar with one of them: ReactDOM.render().

The methods imported from 'react' don’t deal with the DOM at all. They don’t engage directly with anything that isn’t part of React.

To clarify: the DOM is used in React applications, but it isn’t part of React. After all, the DOM is also used in countless non-React applications. Methods imported from 'react' are only for pure React purposes, such as creating components or writing JSX elements.

***

```js
import React from 'react';
```