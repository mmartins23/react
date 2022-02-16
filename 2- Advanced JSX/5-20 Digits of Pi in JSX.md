# 20 Digits of Pi in JSX
You can now inject regular JavaScript into JSX expressions! This will be extremely useful.

In the code editor, you can see a JSX expression that displays the first twenty digits of pi.

Study the expression and notice the following:

* The code is written in a JavaScript file. By default, it will all be treated as regular JavaScript.
<br>
* Find ```<div>``` on line 5. From there up through ```</div>```, the code will be treated as JSX.
<br>
* Find Math. From there up through (20), the code will be treated as regular JavaScript again.
<br>
* The curly braces themselves won’t be treated as JSX nor as JavaScript. They are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.

***

```js
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = <h1>2 + 3 = {2 + 3}</h1>

ReactDOM.render(
  math,
 document.getElementById('app')
)
```