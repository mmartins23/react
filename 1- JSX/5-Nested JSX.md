# Nested JSX
You can nest JSX elements inside of other JSX elements, just like in HTML.

Here’s an example of a JSX ```<h1>``` element, nested inside of a JSX ```<a>``` element:

```js
<a href="https://www.example.com"><h1>Click me!</h1></a>
```

To make this more readable, you can use HTML-style line breaks and indentation:

```js
<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>
```

If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it:

```js
(
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
)
```

Nested JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can! Here’s an example of a nested JSX expression being saved as a variable:

```js
 const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
 );
 ```

 ***

```js
const myDiv = <div>
<h1>Hello world</h1>
</div>
```